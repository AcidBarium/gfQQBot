

# gfQQBot

基于ncatbot写的一个qq机器人，能像猫娘一样说话，能给你发表情包，能帮你整理资料

项目起源说明:[硫酸铜妹妹的诞生日记](https://acidbarium.github.io/posts/acidcopper)

项目操作说明:[硫酸铜妹妹的开发手册](https://acidbarium.github.io/posts/acidcopperDev)

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />

<p align="center">

<a href="https://github.com/AcidBarium/gfQQBot/">
  <img src="img/logo.png" alt="Logo" width="120" height="120">
</a>

<h3 align="center">gfQQBot</h3>
<p align="center" style="line-height: 1.5; font-size: 16px;">
  <strong>梦中情人</strong>
  <br />
  <a href="https://github.com/AcidBarium/gfQQBot">查看Demo</a>
  ·
  <a href="https://github.com/AcidBarium/gfQQBot/issues">报告Bug</a>
  ·
  <a href="https://github.com/AcidBarium/gfQQBot/issues">提出新特性</a>
</p>


</p>

 
## 目录

- [功能一览](#功能一览)
- [上手指南](#上手指南)
  - [开发前的配置要求](#开发前的配置要求)
  - [安装步骤](#安装步骤)
- [文件目录说明](#文件目录说明)
- [开发的架构](#开发的架构)
- [部署](#部署)
- [使用到的框架](#使用到的框架)
- [贡献者](#贡献者)
  - [如何参与开源项目](#如何参与开源项目)
- [版本控制](#版本控制)
- [作者](#作者)
- [鸣谢](#鸣谢)
- [TODO List](#todo-list-)

### 功能一览

- 喵喵聊天功能
  - 喵喵：接入一个32B的deepseek模型，完成一些猫娘对话
  - 喵喵喵：接入一个7B的deepseek模型，完成一些简单的猫娘对话
  - 上述两个功能可以根据不同的用户选择是否使用刻薄猫娘
  - 可以指定私聊用户，对于未选择的用户会返回“不能和陌生人说话”，私聊可以支持联系上下文。
- 喵喵娱乐功能
  - 喵喵gal：从https://sticker.kungal.com 抽取一张gal表情包
  - 喵喵p图 [name]：从pixiv上搜索一张相关的照片，使用了[lolicon api](https://api.lolicon.app/#/setu),name可以是random
  - 喵喵vv：创意来自[同学](https://github.com/markzhang12345/vvBot)，由于班门弄斧以及不太像猫娘所以正式版也关了
- 喵喵学习功能
  - 喵喵home：返回大连理工大学大二下naosi课程资料根目录列表（以txt形式返回）
  - 喵喵ls [num] ：返回大连理工大学大二下naosi课程资料二级目录下的文件列表（以txt形式返回）
  - 喵喵head [num] ：查询以num开始的10个文件的名字
  - 喵喵search [file] ：查询相关文件及其位置
  - 喵喵apt [num] :下载num代表的文件
  - 喵喵学习random ：从资料库里面随机抽一个资料给你去学习
- 喵喵帮助功能
  - 喵喵help ：输出支持的指令以及用法


### 上手指南


###### 开发前的配置要求

1. python = 3.12
2. openai
3. requests
4. NcatBot
5. rapidfuzz

###### **安装步骤**

代码下载

```sh
git clone https://github.com/AcidBarium/gfQQBot.git
```

环境配置

```sh
pip install requests openai ncatbot rapidfuzz
```

### 文件目录说明

```
filetree 
├── DUT
│   ├── A_sonDir
│   │   ├── xxxxxx(索引)
│   │   ├── xxxxxx(索引)
│   ├── main.py(用来给文件编写索引)
│   ├── rootDir.txt(根索引文件)
│   ├── total.txt(总索引文件)
├── img
├── vv
│   ├── vv1.jpg (vv表情包)
│   ├── xxx.jpg
│   ├── rename_log.txt (vv表情包索引)
├── deepseek.py (本地ds)
├── deepseekRemote.py (硅基ds)
├── dutGetFile.py (喵喵学习功能)
├── LICENSE
├── LuoLiPicture.py (包含喵喵p图和喵喵gal)
├── main.py (机器人主控程序)
├── readme.md
├── mmHelp.py (喵喵help)
└── ThisIsVV.py (喵喵vv)

```


### 开发的架构 

使用的是[ncatbot](https://github.com/liyihao1110/ncatbot),是[napcat](https://github.com/NapNeko/NapCatQQ)的近亲

### 部署

ncatbot的部署请参考[ncatbot仓库](https://github.com/liyihao1110/ncatbot)和他们的[开发手册](https://docs.ncatbot.xyz/)

### 启动说明

请参考[硫酸铜妹妹的开发手册](https://acidbarium.github.io/posts/acidcopperDev)

### 贡献者

<a href="https://github.com/AcidBarium/GeneCardsWebScraper/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AcidBarium/gfQQBot" />
</a>

#### 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。


1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

Acidbarium

联系方式：acidbarium@163.com  


### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE](https://github.com/AcidBarium/gfQQBot/blob/master/LICENSE)

### 鸣谢

- [ncatbot](https://github.com/liyihao1110/ncatbot)
- [bestreadme](https://github.com/shaojintian/Best_README_template)
- [naosi](https://github.com/NAOSI-DLUT)
- [kungal](https://sticker.kungal.com/)
- 群友
- chatGPT

### TODO List ✅


- [ ] 限制p站作者id，得到好看健康的图片
- [ ] 使用数据库优化资料存储
- [ ] 优化模糊搜索功能
- [ ] 接入纯血deepseek
- [ ] 使用消息队列来完成联系上下文
- [ ] 增加喵喵概率说话功能
- [ ] 改进 Bot 的响应速度  
- [ ] 增加更多有趣的对话功能 
- [ ] 撰写更详细的使用文档  
- [ ] 使用json做文件的索引，显得更加高端与高效


<!-- links -->
[your-project-path]:AcidBarium/gfQQBot
[contributors-shield]: https://img.shields.io/github/contributors/AcidBarium/gfQQBot.svg?style=flat-square
[contributors-url]: https://github.com/AcidBarium/gfQQBot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AcidBarium/gfQQBot.svg?style=flat-square
[forks-url]: https://github.com/AcidBarium/gfQQBot/network/members
[stars-shield]: https://img.shields.io/github/stars/AcidBarium/gfQQBot.svg?style=flat-square
[stars-url]: https://github.com/AcidBarium/gfQQBot/stargazers
[issues-shield]: https://img.shields.io/github/issues/AcidBarium/gfQQBot.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/AcidBarium/gfQQBot.svg
[license-shield]: https://img.shields.io/github/license/AcidBarium/gfQQBot.svg?style=flat-square
[license-url]: https://github.com/AcidBarium/gfQQBot/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
