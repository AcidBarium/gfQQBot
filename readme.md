

# gfQQBot

基于ncatbot写的一个qq机器人，能像猫娘一样说话，能给你发表情包，能帮你整理资料

项目起源说明:[硫酸铜妹妹的诞生日记](https://acidbarium.github.io/posts/acidcopper)

项目操作说明:[还在写QAQ]()

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
  <img src="img/logo.png" alt="Logo" width="80" height="80">
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
eg:

```
filetree 
├── DUT
│   ├── A_sonDir
│   │   ├── xxxxxx(索引)
│   │   ├── xxxxxx(索引)
│   ├── main.py
│   ├── rootDir.txt
│   ├── total.txt
├── img
├── vv
│   ├── vv1.jpg
│   ├── xxx.jpg
├── deepseek.py
├── deepseekRemote.py
├── dutGetFile.py
├── LICENSE
├── LuoLiPicture.py
├── main.py
├── readme.md
└── ThisIsVV.py

```


### 开发的架构 

使用的是[ncatbot](https://github.com/liyihao1110/ncatbot),是[napcat](https://github.com/NapNeko/NapCatQQ)的近亲

### 部署

ncatbot的部署请参考[ncatbot仓库](https://github.com/liyihao1110/ncatbot)和他们的[开发手册](https://docs.ncatbot.xyz/)


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

该项目签署了MIT 授权许可，详情请参阅 [LICENSE.txt](https://github.com/AcidBarium/gfQQBot/blob/master/LICENSE.txt)

### 鸣谢

- [ncatbot](https://github.com/liyihao1110/ncatbot)
- [bestreadme](https://github.com/shaojintian/Best_README_template)
- [naosi](https://github.com/NAOSI-DLUT)
- 群友

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
