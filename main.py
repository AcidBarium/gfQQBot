from ncatbot.core import BotClient
from ncatbot.core.message import GroupMessage, PrivateMessage
from ncatbot.utils.config import config
from ncatbot.utils.logger import get_log
# from deepseek import Darling_send_txt
from ThisIsVV import GetVVNum
from deepseekRemote import Darling_send_txt_Remote,Darling_send_txt_Remot_Plus,Demo_send_txt_Remot,DarlingChat
import asyncio
from LuoLiPicture import getLuoLiPicture,RandomgetGalGamePic
import random
from dutGetFile import getRoot,getSonDir,get_gut_file,get_rand_file_to_study,get_gut_file_line_head,search_matches
import time
from mmHelp import get_help
import yaml

## 加载信息
with open("config.yaml", "r", encoding="utf-8") as file:
    gfBOTconfig = yaml.safe_load(file)

_log = get_log()

config.set_bot_uin(gfBOTconfig["QQ_ID"]["up_id"])  # 设置 bot qq 号 (必填)
config.set_ws_uri("ws://localhost:3001")  # 设置 napcat websocket server 地址
config.set_token("") # 设置 token (napcat 服务器的 token)

bot = BotClient()

darlingCat = DarlingChat(gfBOTconfig["deepseek"]["base_url"],gfBOTconfig["deepseek"]["api_key"])


@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg)
    # print("用户id为",msg.user_id)
    if msg.raw_message[:5] == "喵喵p图 " and gfBOTconfig["function"]["mmPic"]:
        msg_text = msg.raw_message[5:]
        pic_url =getLuoLiPicture(msg_text)
        await bot.api.post_group_file(group_id=msg.group_id, image=pic_url)
        print("get daze!")
    elif msg.raw_message[:5] == "喵喵gal" and gfBOTconfig["function"]["mmgal"] :
        pic_url = RandomgetGalGamePic()
        await bot.api.post_group_file(group_id=msg.group_id, image=pic_url)
        print("get daze!")
    elif msg.raw_message == "喵喵help" and gfBOTconfig["function"]["mmStudy"]:
        str_help = get_help()
        delay = random.uniform(1, 2)  # 生成 1 到 2 之间的随机浮点数
        time.sleep(delay)  # 让程序暂停指定的秒数
        await msg.reply(text = str_help)
    elif msg.raw_message == "喵喵home" and gfBOTconfig["function"]["mmStudy"]:
        str_root = getRoot()
        await bot.api.post_group_file(group_id = msg.group_id ,file = str_root)
        print(str_root)
    elif msg.raw_message[:5] == "喵喵ls " and gfBOTconfig["function"]["mmStudy"]:
        str_dir_num = msg.raw_message[5:]
        str_dir = getSonDir(str_dir_num)
        if str_dir =="404":
            await msg.reply(text = "404 NOT FOUND")
        else:
            await bot.api.post_group_file(group_id = msg.group_id ,file = str_dir)
        print(str_dir)
    elif msg.raw_message[:6] == "喵喵apt " and gfBOTconfig["function"]["mmStudy"]:
        str_download_num = msg.raw_message[6:]
        str_download = get_gut_file(str_download_num)
        if str_download == "404":
            await msg.reply(text = "404 NOT FOUND")
        else:
            await bot.api.post_group_file(group_id = msg.group_id ,file = str_download)
        print(str_download)
    elif msg.raw_message== "喵喵学习random" and gfBOTconfig["function"]["mmStudy"]:
        str_rand_study = get_rand_file_to_study()
        await bot.api.post_group_file(group_id = msg.group_id ,file = str_rand_study)
    elif msg.raw_message[:7]== "喵喵head " and gfBOTconfig["function"]["mmStudy"]:
        str_head_num = msg.raw_message[7:]
        str_head = get_gut_file_line_head(str_head_num)
        delay = random.uniform(1, 2)  # 生成 1 到 2 之间的随机浮点数
        time.sleep(delay)  # 让程序暂停指定的秒数
        await msg.reply(text = str_head)
    elif msg.raw_message[:9]== "喵喵search " and gfBOTconfig["function"]["mmStudy"]:
        str_search_num = msg.raw_message[9:]
        str_search = search_matches(str_search_num)
        delay = random.uniform(1, 2)  # 生成 1 到 2 之间的随机浮点数
        time.sleep(delay)  # 让程序暂停指定的秒数
        await msg.reply(text = str_search)
    elif msg.raw_message[:3] == "喵喵喵" and gfBOTconfig["function"]["mmSpeak"]:
        if msg.user_id == gfBOTconfig["QQ_ID"]["bad_id"]:
            ans_result = Demo_send_txt_Remot(msg.raw_message,gfBOTconfig["deepseek"]["base_url"], gfBOTconfig["deepseek"]["api_key"])
        else:    
            ans_result = Darling_send_txt_Remote(msg.raw_message,gfBOTconfig["deepseek"]["base_url"], gfBOTconfig["deepseek"]["api_key"])
        await msg.reply(text = ans_result)
    elif msg.raw_message[:2] == "喵喵" and gfBOTconfig["function"]["mmSpeak"]:
        if msg.user_id == gfBOTconfig["QQ_ID"]["bad_id"]:
            ans_result = Demo_send_txt_Remot(msg.raw_message,gfBOTconfig["deepseek"]["base_url"], gfBOTconfig["deepseek"]["api_key"])
        else:
            ans_result = Darling_send_txt_Remot_Plus(msg.raw_message,gfBOTconfig["deepseek"]["base_url"], gfBOTconfig["deepseek"]["api_key"])
        await msg.reply(text = ans_result)

@bot.private_event()
async def on_private_message(msg: PrivateMessage):
    _log.info(msg)
    if msg.user_id == gfBOTconfig["QQ_ID"]["good_id"] :
        ans_result_darling_acidbarium = darlingCat.send_message(str(gfBOTconfig["QQ_ID"]["good_id"]),msg.raw_message) 
        # ans_result = Darling_send_txt_Remot_Plus(msg.raw_message,gfBOTconfig["deepseek"]["base_url"], gfBOTconfig["deepseek"]["api_key"])
        await bot.api.post_private_msg(msg.user_id, text = ans_result_darling_acidbarium) 
    else:
        await bot.api.post_private_msg(msg.user_id, text="Barium告诉我不能和陌生人说话喵~")  # id为发送者的QQ号码


if __name__ == "__main__":
    bot.run()