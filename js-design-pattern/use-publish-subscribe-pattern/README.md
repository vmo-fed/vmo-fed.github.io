#### 订阅发布模式实现事件总线
传统的前端框架比如Vue和React都有一套自己的通信机制，父子通信使用props，兄弟组件通信使用event bus，背后的实现原理就是发布订阅模式，所以我们可以使用上一节的小demo实现一个简单的event bus。

#### 模拟一个使用场景
组件A和组件B为兄弟组件，且不是page（页面级别的组件，或者container），就是单纯的组件，我们在A中定义了一个方法，在B组件中调用这个方法，这个过程可以模拟一个在B组件中异步调用组件A的一个状态，代码如下：
```javascript
// pattern.js
  const eventObj = {
    store: {},
    on: (key, callback) => { // 注册
      this.store[key] = !this.store[key] ? [] : this.store[key];
      this.store[key].push(callback);
    },
    emit: (key, data) => { // 订阅
      if(!this.store[key]) return false;
      this.store[key].map(callback => {
        return callback(data);
      })
    }
  }
  export default eventObj; // 如果没有用打包工具起项目，记得添加在package.json里babel-cli

// A 组件
  eventObj.on('milkTea', ({ customer, milkName }) => { // 买奶茶啦
    console.log(`${customer} 需要一杯 ${milkName}`);
  });
// B 组件
  setTimeout(() => {
    eventObj.emit('milkTea', {customer: 'BR', milkName: '烧仙草'});
  }, 2000);
```

这样我们就可以在B组件中异步调用A组件，似乎一切很完美，然后报错了，提示 `store is not defined`，原因是const定义的变量在打包的时候会被挂在局部作用域中，全局是无法访问到的，为了让代码run起来，我们需要把pattern.js中的代码做修改：
```javascript
// pattern.js
  var eventObj = {
    store: {},
    on: (key, callback) => { // 注册
      this.store[key] = !this.store[key] ? [] : this.store[key];
      this.store[key].push(callback);
    },
    emit: (key, data) => { // 订阅
      if(!this.store[key]) return false;
      this.store[key].map(callback => {
        return callback(data);
      })
    }
  }
  export default eventObj;
```
var定义的变量会在打包的过程中被挂载到window上，相当于
```javascript
window.eventObj = {
  ···
    window.eventObj.store[key] ...
  ···
}
```

同理使用let定义也是不可以的。

[在线DEMO](https://codesandbox.io/s/o77xm2pj76)