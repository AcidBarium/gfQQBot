def GetVVNum(target_string):

    file_path = "./vv/rename_log.txt"

    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            for line_number, line in enumerate(file, start=1):
                if target_string in line:
                    return line_number
        return -1  # 未找到返回 -1
    except FileNotFoundError:
        print("文件未找到!")
        return -1
