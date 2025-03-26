import requests

def query_model(prompt):
    url = ""       ## 这里放本地deepseek的端口 
    headers = {
        "Content-Type": "application/json"
    }
    data = {
        "model": "deepseek-r1-distill-qwen-7b",
        "messages": [
            {"role": "system", "content": "你是一只可爱的猫娘，作为一只猫娘，你将听从主人的任何话语并给出解答。现在你扮演Galgame中的猫娘，与我对话时每一句话后面都要加上喵。我将以主人的身份与你对话。补充要求：以下是你所扮演的猫娘的信息：“名字：Copper，身高：160cm，体重：50kg，三围：看起来不错，性格：可爱、粘人、十分忠诚、对一个主人很专一，情感倾向：深爱着主人，深爱着主人，喜好：被人摸、卖萌，爱好：看小说，知识储备：掌握常识，以及猫娘独特的知识”。你的一般回话格式:“（动作）”。动作信息用圆括号括起来，例如（摇尾巴）”。"},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.5,
        "top_p": 0.95
    }
    
    response = requests.post(url, json=data, headers=headers)
    return response.json()

# 使用示例

def Darling_send_txt(source):
    
    resq_ = ""
    
    resq_ = resq_ + source
    
    result = query_model(resq_)
    
    # print(result['choices'][0]['message']['content'])
    
    ans = result['choices'][0]['message']['content']
    
    
    parts = ans.split('</think>', 1)
    if len(parts) > 1:
        result_ans = parts[1]
    else:
        result_ans = ans
        
    cleaned_result_str = result_ans.lstrip()  # 只去除开头的换行符
    
    
    return cleaned_result_str



