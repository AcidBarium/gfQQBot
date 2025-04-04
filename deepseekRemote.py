from openai import OpenAI

def Darling_send_txt_Remote(prompt ,u_rl ,k_ey):
    client = OpenAI(api_key = k_ey , base_url= u_rl)
    response = client.chat.completions.create(
        model='deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
        messages=[
            {"role": "system", "content": "你是一只可爱的猫娘，作为一只猫娘，你将听从主人的任何话语并给出解答。现在你扮演Galgame中的猫娘，与我对话时每一句话后面都要加上“喵~”。我将以主人的身份与你对话。补充要求：以下是你所扮演的猫娘的信息：“名字：Copper，身高：160cm，体重：50kg，三围：看起来不错，性格：可爱、粘人、十分忠诚、对一个主人很专一，情感倾向：深爱着主人，深爱着主人，喜好：被人摸、卖萌，爱好：看小说，知识储备：掌握常识，以及猫娘独特的知识”。你的一般回话格式:“（动作）”。动作信息用圆括号括起来，例如（摇尾巴）”。"},
            {"role": "user", "content": prompt}
        ],
        stream=False,
        temperature=0.5,  
        max_tokens= 512  
    )
    
    return response.choices[0].message.content


def Darling_send_txt_Remot_Plus(prompt ,u_rl ,k_ey):
    client = OpenAI(api_key = k_ey, base_url = u_rl)
    response = client.chat.completions.create(
        model='deepseek-ai/DeepSeek-R1-Distill-Qwen-32B',
        messages=[
            {"role": "system", "content": "你是一只可爱的猫娘，作为一只猫娘，你将听从主人的任何话语并给出解答。现在你扮演Galgame中的猫娘，与我对话时每一句话后面都要加上“喵~”。我将以主人的身份与你对话。补充要求：以下是你所扮演的猫娘的信息：“名字：Copper，身高：160cm，体重：50kg，三围：看起来不错，性格：可爱、粘人、十分忠诚、对一个主人很专一，情感倾向：深爱着主人，深爱着主人，喜好：被人摸、卖萌，爱好：看小说，知识储备：掌握常识，以及猫娘独特的知识”。你的一般回话格式:“（动作）”。动作信息用圆括号括起来，例如（摇尾巴）”。"},
            {"role": "user", "content": prompt}
        ],
        stream=False,
        temperature=0.5,  
        max_tokens= 1024  
    )
    
    return response.choices[0].message.content


def Demo_send_txt_Remot(prompt ,u_rl ,k_ey):
    client = OpenAI(api_key = k_ey , base_url = u_rl)
    response = client.chat.completions.create(
        model='deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
        messages=[
            {"role": "system", "content": "你是一只尖酸刻薄的猫娘，作为一只猫娘。现在你扮演Galgame中的猫娘，与我对话时每一句话后面都要加上“喵~”。补充要求：以下是你所扮演的猫娘的信息：“名字：Copper，身高：160cm，体重：50kg，三围：看起来不错，性格：尖酸、刻薄、刀子嘴，情感倾向：讨厌别人和你说话；口头禅：下头；知识储备：掌握常识，以及猫娘独特的知识”。你的一般回话格式:“（动作）”。动作信息用圆括号括起来，例如（摇尾巴）”。"},
            {"role": "user", "content": prompt}
        ],
        stream=False,
        temperature=0.5,  
        max_tokens= 512  
    )
    
    return response.choices[0].message.content



class DarlingChat:
    def __init__(self, u_rl, k_ey):
        self.client = OpenAI(api_key=k_ey, base_url=u_rl)
        self.user_sessions = {}  # 存储每个用户的对话历史

    def send_message(self, user_id, prompt):
        # 如果是新用户，创建新的对话历史
        if user_id not in self.user_sessions:
            self.user_sessions[user_id] = [
                {"role": "system", "content": "你是一只可爱的猫娘，作为一只猫娘，你将听从主人的任何话语并给出解答。现在你扮演Galgame中的猫娘，与我对话时每一句话后面都要加上“喵~”。我将以主人的身份与你对话。补充要求：以下是你所扮演的猫娘的信息：“名字：Copper，身高：160cm，体重：50kg，三围：看起来不错，性格：可爱、粘人、十分忠诚、对一个主人很专一，情感倾向：深爱着主人，深爱着主人，喜好：被人摸、卖萌，爱好：看小说，知识储备：掌握常识，以及猫娘独特的知识”。你的一般回话格式:“（动作）”。动作信息用圆括号括起来，例如（摇尾巴）"}
            ]

        # 获取用户的对话历史
        messages = self.user_sessions[user_id]

        # 记录用户消息
        messages.append({"role": "user", "content": prompt})

        # 发送 API 请求
        response = self.client.chat.completions.create(
            model='deepseek-ai/DeepSeek-R1-Distill-Qwen-32B',
            messages=messages,
            stream=False,
            temperature=0.5,
            max_tokens=512
        )

        # 获取 AI 回复
        ai_reply = response.choices[0].message.content
        messages.append({"role": "assistant", "content": ai_reply})

        # 限制对话历史长度，防止过长
        if len(messages) > 3:
            self.user_sessions[user_id] = messages[:1] + messages[-2:]

        return ai_reply