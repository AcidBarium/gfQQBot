# import requests
# from io import BytesIO
# from PIL import Image


# def getLuoLiPicture(string_Des):

#     API_URL = "https://api.lolicon.app/setu/v2"
#     params = {
#         "r18":0 ,  # 0 = 非R18, 1 = R18, 2 = 混合
#         "num": 1,  # 请求 1 张图片
#         "tag": string_Des ,
#         "size": "small"
#     }

#     # 发送请求获取图片信息
#     response = requests.get(API_URL, params=params)
#     data = response.json()

#     print(data)

#     if "data" in data and len(data["data"]) > 0:
#         img_url = data["data"][0]["urls"]["small"]  # 获取图片URL
#         print(f"图片URL: {img_url}")
#         return img_url
        
#         # # 下载并显示图片
#         # img_response = requests.get(img_url)
#         # img = Image.open(BytesIO(img_response.content))
#         # img.show()
#     else:
#         return 0


import requests
import random

def getLuoLiPicture(input_string):
    
    tags = input_string.split(",") 
    
    API_URL = "https://api.lolicon.app/setu/v2"
    if isinstance(tags, str):
        tags = [tags]  # 如果输入是字符串，转换为列表
    elif not isinstance(tags, list):
        return "标签必须是字符串或列表"
    
    uids = [1960050, 1878082, 9212166, 23098486, 25760573, 671593,1023317,7324626]

    random.shuffle(uids)

    params = {
        "r18": 0,  # 0 = 非R18, 1 = R18, 2 = 混合
        "num": 1,  # 请求 1 张图片
        "tag": tags,  # 传递标签列表
        "size": "original",
        "uid" : uids,
    }

    # 发送请求获取图片信息
    response = requests.get(API_URL, params=params)
    data = response.json()

    print(data)  # 调试信息

    if "data" in data and len(data["data"]) > 0:
        img_url = data["data"][0]["urls"]["original"]  # 获取图片URL
        print(f"图片URL: {img_url}")
        return img_url
    else:
        return 0  # 未找到图片
    
    
def RandomgetGalGamePic():
    big = random.randint(1,6)
    small = random.randint(1,74)
    string_url = "https://sticker.kungal.com/stickers/KUNgal" + str(big) + "/" + str(small)+ ".webp"
    return string_url
    
