# 如何发布一个npm module包
###### 1.如何创建并发布一个npm包？
- 注册一个[npm账号](https://www.npmjs.com/)
- 在shell里输入`npm login`回车，依次输入Username，Password，Email，即可在命令行登录npm

###### 2.创建一个文件夹npmModule，建新文件index.js和package.json
```javascript
  function echoDate(name) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `现在是 ${year}年${month}月${day}日${hour}时${minute}分，欢迎${name}童鞋来到shell 世界～`
  }

  module.exports = echoDate;
```

###### 3.项目结构
  ```tree
  ├── bin
  │   ├── index.js
  ├── index.js
  ├── package.json

###### 4.发布
首次发布不需要更新版本号，后面修改npm module再次发布需要执行`npm dispatch`更新npm version，然后执行`npm publish`，注意npm包名不能与其他开发者已经发布的包重复，然后过一分钟去npm官网的settings里查看自己的包

###### 6.全局包 VS 局部包
上面的包其实是一个局部包，我们重新创建一个文件夹npmModuleDemo，然后执行`npm init -y`生成package.json文件，然后执行npm i echodate -S，如何创建一个全局包？

- 建bin文件夹，建index.js：
```javascript
  #!/usr/bin/env node
  var echoDate = require('../index')
  var arguments = process.argv.slice(2)
  console.log(echoDate(arguments[0]))
```
  其中`!/usr/bin/env node`	表示当前文件执行环境是node，在shell脚本里执行普通js文件需要执行node先切换到node环境，这行代码相当于自动帮我们切到node环境下，然后可以直接调用echoDate。

- 在package.json里加上

```javascript
  "bin": {
    "echodate": "./bin/index.js"
  },
```
然后执行第4步，这样就可以创建一个全局包。
总结：创建全局包需要指定文件执行环境，`!/usr/bin/env node`或者其他sh环境，py环境，然后放在`/Users/${ucomputername}/.nvm/versions/node/${node-version}/bin/`下
###### 我们来思考下全局包和局部包有何不同？
- 局部包存在自己项目中的node_module里，在项目外无法调用到
- 全局包存在与`/Users/${ucomputername}/.nvm/versions/node/${node-version}/bin/`，bin作为一个全局变量，存在于bin下的文件就可以在全局访问到，本地也可以访问到全局npm module，所以我们也可以直接在bin下手动添加一个文件，也是可以作为全局变量调用，这个文件必须要指定文件执行环境，eg：`!/usr/bin/env node`，然后修改文件权限`chomd 777 fileName`。
全局包和本地安装的包是两个完全独立的包，删除一个不会影响另外一个

###### npm link做了什么？
npm link在全局的`{prefix}/lib/node_modules/<package>`目录创建一个symlink映射到npm link命令执行的文件夹下的package，也可以将任何bin里的命令映射到`{prefix}/bin/{name}` ,这样我们可以在本地边开发边测试我们的npm mudole，这里全局和局部包为同一个包，取消关联用`npm unlink {name}`