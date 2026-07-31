import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import mysql, { Pool } from 'mysql2/promise';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

let pool: Pool;

async function initDB() {
    try {
        // Connect without database to create it if not exists
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
        });
        
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`indiab491\`;`);
        await connection.end();

        // Now create pool with database
        pool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'indiab491',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });

        // Create table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS submissions (
                id INT AUTO_INCREMENT PRIMARY KEY,
                fullName VARCHAR(255) NOT NULL,
                location VARCHAR(255),
                sector VARCHAR(255),
                format VARCHAR(100),
                narrative TEXT,
                fileUrl VARCHAR(500),
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        await pool.query(createTableQuery);
        console.log("Database & Table initialized successfully");
    } catch (error: any) {
        console.error("Database initialization failed. Please check MySQL is running and credentials are correct:", error.message);
    }
}

initDB();

app.post('/api/submissions', upload.single('file'), async (req: Request, res: Response) => {
    try {
        const { fullName, location, sector, format, narrative } = req.body;
        const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

        if (!fullName) {
            res.status(400).json({ error: "Full Name is required" });
            return;
        }

        if (!pool) {
            res.status(500).json({ error: "Database not connected" });
            return;
        }

        const [result]: any = await pool.query(
            'INSERT INTO submissions (fullName, location, sector, format, narrative, fileUrl) VALUES (?, ?, ?, ?, ?, ?)',
            [fullName, location, sector, format, narrative, fileUrl]
        );

        res.status(201).json({ success: true, id: result.insertId, message: "Submission created successfully" });
    } catch (error) {
        console.error("Error saving submission:", error);
        res.status(500).json({ error: "Failed to save submission" });
    }
});

app.get('/api/submissions', async (req: Request, res: Response) => {
    try {
        if (!pool) {
            res.status(500).json({ error: "Database not connected" });
            return;
        }
        
        const [rows] = await pool.query('SELECT * FROM submissions ORDER BY createdAt DESC');
        res.json({ success: true, data: rows });
    } catch (error) {
        console.error("Error fetching submissions:", error);
        res.status(500).json({ error: "Failed to fetch submissions" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
