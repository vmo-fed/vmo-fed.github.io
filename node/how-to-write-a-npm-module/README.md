# 如何发布一个npm module包
* [注册登录](#login)
* [初始化](#init)
* [创建npm包](#create)
* [发布](#publish)

### <a name="login">注册登录</a>

- 如没有账号需到[npm账号](https://www.npmjs.com/)注册一个
- 如已注册成功，在shell里输入`npm login`，按照提示输入对应的用户名、密码等即可登录

### <a name="init">初始化</a>

```shell
npm init -y
```

### <a name="create">创建npm包</a>

```javascript
exports.sayHello = function() {
  console.log("hello world");
}
```

### <a name="publish">发布</a>

```shell
npm publish
```