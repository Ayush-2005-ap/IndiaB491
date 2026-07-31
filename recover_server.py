import json
import os

transcript_file = '/Users/ayushpandey/.gemini/antigravity-ide/brain/70399917-32e0-45ed-bff5-f84aeaf5f13a/.system_generated/logs/transcript.jsonl'
recovered_files = {}

if not os.path.exists(transcript_file):
    print("Transcript not found.")
    exit(1)

with open(transcript_file, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
        except:
            continue
            
        if data.get('type') == 'PLANNER_RESPONSE' and 'tool_calls' in data:
            for call in data['tool_calls']:
                if call.get('name') in ['write_to_file', 'replace_file_content', 'multi_replace_file_content']:
                    args = call.get('args', {})
                    # For different tools, the target file might be under different keys
                    # e.g., 'TargetFile', 'AbsolutePath', 'FilePath'
                    target_file = None
                    for key in ['TargetFile', 'AbsolutePath', 'FilePath']:
                        if key in args:
                            target_file = args[key].strip('"')
                            break
                    
                    if target_file and '/IndiaB491/server/' in target_file:
                        if call['name'] == 'write_to_file':
                            content = args.get('CodeContent', '').strip('"')
                            # decode unicode escapes safely if needed, though they might just be raw strings. 
                            # Let's just track that it was created/modified.
                            recovered_files[target_file] = content
                        elif call['name'] == 'replace_file_content':
                            pass # more complex, but we at least know it was modified
                            
print("Files that were modified in server:")
for f in recovered_files:
    print(f)
