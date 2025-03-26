import os

def generate_file_index(base_path):
    a_folders = [f for f in os.listdir(base_path) if os.path.isdir(os.path.join(base_path, f))]
    a_folders.sort()
    
    index_mapping = {}
    
    buff = 0
    
    for i, a_folder in enumerate(a_folders, start=1):
        
        if a_folder =="A_sonDir":
            buff = 1
            continue
        
        a_index = f"{i-buff:02d}"
        index_mapping[a_folder] = a_index
        output_lines = [f"{a_folder}: {a_index}"]
        
        file_count = 1
        for root, _, files in os.walk(os.path.join(base_path, a_folder)):
            files.sort()
            for file in files:
                file_index = f"{file_count:03d}"
                rel_path = os.path.relpath(os.path.join(root, file), base_path)
                output_lines.append(f"{a_index}{file_index}: {rel_path}")
                file_count += 1
        
        A_son_path = os.path.join(base_path, "A_sonDir")
        
        output_file_path = os.path.join(A_son_path, f"{a_index}_{a_folder}.txt")
        with open(output_file_path, "w", encoding="utf-8") as f:
            f.write("\n".join(output_lines))
            
        output_file = os.path.join(base_path, "rootDir.txt")
        with open(output_file, "a", encoding="utf-8") as f:
            f.write(a_index +"_" + a_folder +"\n")
            
        output_file_total = os.path.join(base_path, "total.txt")
        with open(output_file_total, "a", encoding="utf-8") as f:
            f.write("\n")
            f.write("\n".join(output_lines[1:]))
    
    print("File indexing completed. Check individual index files for details.")

if __name__ == "__main__":
    generate_file_index(os.getcwd())
