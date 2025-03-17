from ncatbot.core import BotClient
from ncatbot.core.message import GroupMessage, PrivateMessage
from ncatbot.utils.config import config
from ncatbot.utils.logger import get_log
from deepseek import Darling_send_txt

_log = get_log()

config.set_bot_uin("3666289634")  # 设置 bot qq 号 (必填)
config.set_ws_uri("ws://localhost:3001")  # 设置 napcat websocket server 地址
config.set_token("") # 设置 token (napcat 服务器的 token)

bot = BotClient()


@bot.group_event()
async def on_group_message(msg: GroupMessage):
    _log.info(msg)
    if msg.raw_message[:3] == "喵喵喵":
        # ss = "群号为 :" + str(msg.group_id) 
        # await msg.reply(text = ss )
        ans_result = Darling_send_txt(msg.raw_message)
        # await bot.api.post_group_file(group_id=msg.group_id, image="./img/dtz.jpg")# 文件路径支持本地绝对路径，相对路径，网址以及base64
        await msg.reply(text = ans_result)


@bot.private_event()
async def on_private_message(msg: PrivateMessage):
    _log.info(msg)
    if msg.raw_message == "测试":
        await bot.api.post_private_msg(msg.user_id, text="NcatBot 测试成功喵~")  # id为发送者的QQ号码


if __name__ == "__main__":
    bot.run()