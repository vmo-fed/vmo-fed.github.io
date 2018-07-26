# 订阅发布模式

###### 什么是发布订阅模式？
发布订阅模式简单的可以理解为：在一个对象中（eventObj）定义了一个变量（store），然后注册了一个事件（on），该注册事件会添加一些回调函数（callback）到变量中（store），然后在其他地方触发（emit）这个注册事件（on）

用自然语言解释：去奶茶店（eventObj）买奶茶，你对服务生小姐姐说我要一杯烧仙草（on），小姐姐把这个事件记录下（在store中添加一条记录：BR小盆友点了一杯烧仙草），然后10分钟后烧仙草做好了，服务生小姐姐对你说：Hi，你的烧仙草（emit）好了。

###### 发布订阅的一个简单实现
```javascript
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

  // 使用
  eventObj.on('milkTea', ({ customer, milkName }) => { // 买奶茶啦
    console.log(`${customer} 需要一杯 ${milkName}`);
  });
  setTimeout(() => {
    eventObj.emit('milkTea', {customer: 'BR', milkName: '烧仙草'});
  }, 2000);
```
###### 详解
上面的代码我们简单的实现了一个发布订阅模式，在2S后订阅，这里是一个异步操作，我们可以使用这种模式在下一节实现一个简单的事件总线模型，即组件间相互通信，当然我们也可以继续完善下上面的代码，添加一个取消注册事件，代码如下：
```javascript
  ...
  unon: (key) => {
    if(this.store[key].length <= 0) return false;
    this.store[key] = null;
  }
  ...
```
