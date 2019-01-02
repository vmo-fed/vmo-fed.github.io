### git教程七：fetch和pull

#### fecth
拉取远程仓库最新代码到版本库，不会影响本地代码，本地代码还是原来的代码：

```Shell
  $ git fetch [<options>] <group>
  $ git fetch --multiple [<options>] [(<repository> | <group>)​]
  $ git fetch --all [<options>]
  $ git fetch <远程主机名> <分支名>
```

默认取回所有分支的更新

然后与本地对应的分支合并：

```Shell
$ git rebase origin/master
$ 或者
$ git merge origin/master
```

#### pull
拉取远程某个分支仓库代码到本地
会和本地分支代码合并

相当于 git fecth 和 git rebase 的结果
```Shell
$ git pull <远程主机名> <远程分支名>:<本地分支名>
```
如果当前分支与远程分支存在追踪关系，git pull就可以省略远程分支名
如果合并需要采用rebase模式，可以使用--rebase选项。
```Shell
$ git pull --rebase <远程主机名> <远程分支名>:<本地分支名>
$ 简写为
$ git pull -r
```
远程主机名为origin
