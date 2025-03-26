import os
import random
from rapidfuzz import process, fuzz
import re


def getRoot():
    return "./DUT/rootDir.txt"

def getSonDir(num):
    base_path = os.path.join(os.getcwd(), "DUT", "A_sonDir")
    target_prefix = f"{num}_"
    
    for file in os.listdir(base_path):
        if file.lower().endswith(".txt") and file.startswith(target_prefix):
            return "./DUT/A_sonDir/" + file
    
    return "404"

def get_gut_file(input_str):
    base_path = os.path.join(os.getcwd(), "DUT", "A_sonDir")
    number = input_str[:2]  # 提取前两位作为文件前缀
    line_number = int(input_str[2:]) + 1  # 计算需要读取的行号
    
    target_prefix = f"{number}_"
    
    for file in os.listdir(base_path):
        if file.lower().endswith(".txt") and file.startswith(target_prefix):
            file_path = os.path.join(base_path, file)
            
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    lines = f.readlines()
                    if line_number <= len(lines):
                        str_ans = lines[line_number - 1].strip()
                        str_ori =  "./DUT/" + str_ans[7:]
                        str_aft = str_ori.replace("\\", "/")  # 将所有反斜杠替换为正斜杠
                        return str_aft
                    else:
                        return "404"
            except Exception as e:
                return f"404"
    
    return "404"


def get_gut_file_line_head(input_str):
    base_path = os.path.join(os.getcwd(), "DUT", "A_sonDir")
    number = input_str[:2]  # 提取前两位作为文件前缀
    line_number = int(input_str[2:]) + 1  # 计算需要读取的起始行号（1-based）

    # 查找符合条件的文件（以number开头的txt文件）
    matching_files = [f for f in os.listdir(base_path) if f.startswith(number) and f.endswith(".txt")]

    if not matching_files:
        return "404 NOT FOUND"

    file_path = os.path.join(base_path, matching_files[0])  # 选取第一个匹配的文件

    # 读取指定范围的行
    extracted_lines = []
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
            start_idx = line_number - 1  # 转换为 0-based index
            end_idx = start_idx + 10  # 读取 10 行

            extracted_lines = lines[start_idx:end_idx]  # 获取范围内的行
    except Exception as e:
        return "读取文件时发生错误"

    return "".join(extracted_lines) if extracted_lines else "404 NOT FOUND"




def get_rand_file_to_study():
    random_number = random.randint(1, 76)
    
    mark_rand_file = getSonDir(str(random_number))
    
    with open(mark_rand_file, "r", encoding="utf-8") as f:
        lines = f.readlines()

    random_line = random.choice(lines[1:]) 
    
    result_file_num = random_line[:5]
    
    result_file = get_gut_file(result_file_num)
    
    return result_file
    
    
    
def clean_text(text):
    return re.sub(r"[^\w\s]", "", text.lower())  # 去除非字母数字字符（如 （ 和 ））


def search_matches(query, limit=10):
    # 读取文件
    
    # 使用函数
    file_path = "./DUT/total.txt"  # 你的文件路径
    
    with open(file_path, "r", encoding="utf-8") as f:
        lines = [line.strip() for line in f.readlines()]  # 去除换行符

    # 按空格拆分查询词
    query_keywords = query.split()  # 例如，query = "概率论 答案" -> ['概率论', '答案']

    # 先进行严格匹配，查看是否有包含查询中的关键词的行
    strict_matches = [line for line in lines if all(keyword in clean_text(line) for keyword in query_keywords)]

    if strict_matches:
        # 如果找到严格匹配的行，直接返回前 limit 行，并将结果合并为一个字符串
        return '\n'.join(strict_matches[:limit])
    else:
        # 如果没有找到严格匹配，进行模糊匹配
        best_matches = process.extract(
            query, 
            lines, 
            scorer=fuzz.partial_ratio,
            processor=clean_text,  # 使用新预处理函数
            limit=limit
        )

        # 返回前 limit 行的匹配结果，并将结果合并为一个字符串
        return '\n'.join([match[0] for match in best_matches])