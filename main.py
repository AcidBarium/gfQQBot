from ncatbot.core import BotClient
from ncatbot.core.message import GroupMessage, PrivateMessage
from ncatbot.utils.config import config
from ncatbot.utils.logger import get_log
from deepseek import Darling_send_txt
from ThisIsVV import GetVVNum
from deepseekRemote import Darling_send_txt_Remote,Darling_send_txt_Remot_Plus,Demo_send_txt_Remot
import asyncio

_log = get_log()

config.set_bot_uin("3666289634")  # 设置 bot qq 号 (必填)
config.set_ws_uri("ws://localhost:3001")  # 设置 napcat websocket server 地址
config.set_token("") # 设置 token (napcat 服务器的 token)

bot = BotClient()


@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg)
    # print("用户id为",msg.user_id)
    if msg.raw_message[:3] == "喵喵喵":
        # ss = "群号为 :" + str(msg.group_id) 
        # await msg.reply(text = ss )
        # ans_result = Darling_send_txt(msg.raw_message)
        # await bot.api.post_group_file(group_id=msg.group_id, image="./img/dtz.jpg")# 文件路径支持本地绝对路径，相对路径，网址以及base64
        if msg.user_id == 242986350:
            ans_result = Demo_send_txt_Remot(msg.raw_message)
        else:    
            ans_result = Darling_send_txt_Remote(msg.raw_message)
        await msg.reply(text = ans_result)
    elif msg.raw_message[:2] == "喵喵":
        if msg.user_id == 242986350:
            ans_result = Demo_send_txt_Remot(msg.raw_message)
        else:
            ans_result = Darling_send_txt_Remot_Plus(msg.raw_message)
        await msg.reply(text = ans_result)
    # elif msg.user_id == 3218866932 :
    # else:
    #     ans_num = GetVVNum(msg.raw_message)
    #     # print(msg.raw_message)
    #     if ans_num != -1:
    #         ans_img_VV = "./vv/"+str(ans_num)+".png"
    #         print(ans_img_VV)
    #         await bot.api.post_group_file(group_id=msg.group_id, image=ans_img_VV )


@bot.private_event()
async def on_private_message(msg: PrivateMessage):
    _log.info(msg)
    if msg.user_id ==3218866932 :
        
        ans_result = Darling_send_txt_Remote(msg.raw_message)
        await bot.api.post_private_msg(msg.user_id, text = ans_result) 
    else:
        await bot.api.post_private_msg(msg.user_id, text="Barium告诉我不能和陌生人说话喵~")  # id为发送者的QQ号码


if __name__ == "__main__":
    bot.run()