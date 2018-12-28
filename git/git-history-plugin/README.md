### git教程：前言
版本控制器有很多种，我们常见的以及项目中使用的是git，下面介绍一些常用的git命令，以及背后一些简单的原理（为啥不深入，因为我也不会呀，hiahiahia）。
本教程参考[廖大博客](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)以及seven的
博客（博客地址找不到了，so sorry）

#### 1. 什么是版本控制
版本控制通俗的来讲就是保存过去每一帧你对文件做的操作。这里每一帧可以理解为你每次改完了一部分内容想要保存的时候。

#### 2. 集中式 VS 分布式
相信你也一定听过svn，这是一种集中式版本控制系统，所有数据放在一个中央仓库中，记录每次文件变动，不过必须要联网
git是分布式，每个人的电脑都包含完整版本库，安全性高，提交速度快

#### 3. git跨平台，支持Linux、Unix、Mac和Windows
#### 4. 安装git
  - Linux 系统：在命令行输入git，没有装的话会提醒你如何安装git`sudo apt-get install git`
  - macos 系统：xcode集成了git，运行Xcode，选择菜单“Xcode”->“Preferences”，在弹出窗口中找到“Downloads”，选择“Command Line Tools”，点“Install”就可以完成安装了，或者使用`brew install git -g`安装
  - windows 系统： [git下载包官网](https://git-scm.com/downloads)  [国内镜像](https://pan.baidu.com/s/1kU5OCOB#list/path=%2Fpub%2Fgit)

#### 5. 设置用户名和邮箱
```Shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```
这里的名字可以随便起，邮箱一定要是自己的邮箱，个人git账号用私人邮箱，工作git账号用公司邮箱
