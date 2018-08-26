# 快速进入刚创建的目录

在开发中经常会创建一个目录并进入到此目录中，我一般使用

```shell
mkdir my-directory
cd my-directory
```

如果使用一条命令则

```shell
mkdir my-directory && cd my-directory
# 或者
mkdir my-directory;cd my-directory
```

看起来也ok，但如果能再减少一些命令，那我们的开发效率会更高！这里介绍三种方式

### 使用$_

```shell
mkdir my-directory && cd $_
```

### 使用shell script

创建mkdirandcd.sh如下内容

```shell
# mkdirandcd.sh
mkdir $1
cd $1
```

给此文件加权限并执行下面命令

```shell
. ./mkdirandcd.sh my-directory
```

### 使用函数

在.bashrc中添加

```shell
function mkdirandcd(){ mkdir $1 && cd $1 }
```

并使其生效

```shell
source ~/.bashrc
mkdirandcd my-directory
```