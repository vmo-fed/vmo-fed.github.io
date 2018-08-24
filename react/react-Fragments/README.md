# Fragments
背景：我们的React组件需要一个父元素包裹子元素，否则页面会报错，但是这样会生成额外的DOM节点，而Fragment解决了这个问题

常规的react组件的写法

```javascript
  function renderApp() {
    return (
      <div>
        <div>item1</div>
        <div>item2</div>
        <div>item3</div>
      </div>
    )
  }
```
###### 什么是Fragments？

Fragments是React中的一个属性，react 16 +支持，常用的写法如下：
```javascript
  import React, { Fragment } from "react";
  render() {
    <Fragments>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </Fragments>
  }

  // or
  render() {
    <React.Fragments>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </React.Fragments>
  }

  // or short syntax
  render() {
    <>
      <div>item1</div>
      <div>item2</div>
      <div>item3</div>
    </>
  }

```
用来包裹子元素，和普通的用element直接包裹子元素相比，它并不会生成真实的DOM节点，减少了DOM层级

[在线demo](https://codesandbox.io/s/ymwy7m972v)

生成的DOM结构如下：

![](./1.jpg)

其中第三种写法不推荐，因为有的浏览器不支持，而且这种写法无法添加key值和属性，但是Fragments目前也只能添加key值，这在map循环的时候特别有用，其他属性目前也不能添加，后续官方会支持常用的属性，例如事件处理

其中map写法如下：[在线demo](https://codesandbox.io/s/pp6zv79lpx)
```javascript
  return (
    <Fragment>
      {items.map(item => (
        // Without the `key`, React will fire a key warning
        <Fragment key={item.id}>
          <div>{item.term}</div>
          <div>{item.description}</div>
        </Fragment>
      ))}
    </Fragment>
  );
```

##### Fragment的其他用法
[包裹转义字符](https://codesandbox.io/s/ypvzl68jp1)
目前转义字符不需要Fragment也可以正确解析

##### 数组类型的元素包裹
```javascript
render() {
  [
    <div key="1">1</div>,
    <div key="2">2</div>
  ]
}
```
这种写法不太友好，可扩展性差，不推荐使用

##### Fragment的典型使用场景
```javascript
  import React, { Fragment } from "react";
  class Lists extends Component {
    render() {
      return (
        <Fragment>
          <li>hello</li>
          <li>world</li>
        </Fragment>
      )
    }
  }

  class RenderTable extends Component {
    render() {
      return (
        <ul>
          <Lists />
        </ul>
      )
    }
  }
```

```html
  <!-- 渲染出来的DOM结构 -->
  <ul>
    <li>hello</li>
    <li>world</li>
  </ul>
```
