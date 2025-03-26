from ncatbot.core import BotClient
from ncatbot.core.message import GroupMessage, PrivateMessage
from ncatbot.utils.config import config
from ncatbot.utils.logger import get_log
# from deepseek import Darling_send_txt
from ThisIsVV import GetVVNum
from deepseekRemote import Darling_send_txt_Remote,Darling_send_txt_Remot_Plus,Demo_send_txt_Remot
import asyncio
from LuoLiPicture import getLuoLiPicture,RandomgetGalGamePic
import random
from dutGetFile import getRoot,getSonDir,get_gut_file,get_rand_file_to_study,get_gut_file_line_head,search_matches


_log = get_log()

config.set_bot_uin("3666289634")  # 设置 bot qq 号 (必填)
config.set_ws_uri("ws://localhost:3001")  # 设置 napcat websocket server 地址
config.set_token("") # 设置 token (napcat 服务器的 token)

bot = BotClient()


@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg)
    # print("用户id为",msg.user_id)
    # if msg.raw_message[:5] == "喵喵p图 ":
    #     msg_text = msg.raw_message[5:]
    #     pic_url =getLuoLiPicture(msg_text)
    #     await bot.api.post_group_file(group_id=msg.group_id, image=pic_url)
    #     print("get daze!")
    if msg.raw_message[:5] == "喵喵gal":
        pic_url = RandomgetGalGamePic()
        await bot.api.post_group_file(group_id=msg.group_id, image=pic_url)
        print("get daze!")
    elif msg.raw_message == "喵喵home":
        str_root = getRoot()
        await bot.api.post_group_file(group_id = msg.group_id ,file = str_root)
        print(str_root)
    elif msg.raw_message[:5] == "喵喵ls ":
        str_dir_num = msg.raw_message[5:]
        str_dir = getSonDir(str_dir_num)
        if str_dir =="404":
            await msg.reply(text = "404 NOT FOUND")
        else:
            await bot.api.post_group_file(group_id = msg.group_id ,file = str_dir)
        print(str_dir)
    elif msg.raw_message[:6] == "喵喵apt ":
        str_download_num = msg.raw_message[6:]
        str_download = get_gut_file(str_download_num)
        if str_download == "404":
            await msg.reply(text = "404 NOT FOUND")
        else:
            await bot.api.post_group_file(group_id = msg.group_id ,file = str_download)
        print(str_download)
    elif msg.raw_message== "喵喵学习random":
        str_rand_study = get_rand_file_to_study()
        await bot.api.post_group_file(group_id = msg.group_id ,file = str_rand_study)
    elif msg.raw_message[:7]== "喵喵head ":
        str_head_num = msg.raw_message[7:]
        str_head = get_gut_file_line_head(str_head_num)
        await msg.reply(text = str_head)
    elif msg.raw_message[:9]== "喵喵search ":
        str_search_num = msg.raw_message[9:]
        str_search = search_matches(str_search_num)
        await msg.reply(text = str_search)
        
    # elif msg.raw_message[:5] == "喵喵vv ":
    #     msg_text = msg.raw_message[5:]
    #     ans_num = GetVVNum(msg_text)
    #     if ans_num != -1:
    #         ans_img_VV = "./vv/"+str(ans_num)+".png"
    #         print(ans_img_VV)
    #         await bot.api.post_group_file(group_id=msg.group_id, image=ans_img_VV )
    #     else :
    #         ans_img_VV = "./vv/"+str(random.randint(1,428))+".png"
    #         print(ans_img_VV)
    #         await bot.api.post_group_file(group_id=msg.group_id, image=ans_img_VV )
    elif msg.raw_message[:3] == "喵喵喵":
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
        
        ans_result = Darling_send_txt_Remot_Plus(msg.raw_message)
        await bot.api.post_private_msg(msg.user_id, text = ans_result) 
    else:
        await bot.api.post_private_msg(msg.user_id, text="Barium告诉我不能和陌生人说话喵~")  # id为发送者的QQ号码


if __name__ == "__main__":
    bot.run()