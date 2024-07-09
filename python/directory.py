import os
import json

def export_directory_structure_to_json(path, output_file):
    if not os.path.exists(path):
        raise Exception("Invalid path")

    data = {}
    data["name"] = os.path.basename(path)
    data["type"] = "dir"
    data["contents"] = []

    for name in os.listdir(path):
        sub_path = os.path.join(path, name)
        if os.path.isdir(sub_path):
            data["contents"].append(export_directory_structure_to_json(sub_path, output_file))
        else:
            file_data = {}
            file_data["name"] = name
            file_data["type"] = "file"
            data["contents"].append(file_data)

    with open(output_file, "w") as file:
        json.dump(data, file, indent=4)

        export_directory_structure_to_json("path/to/Users/cwj/study/seocho2024/next", "directory_structure.json")