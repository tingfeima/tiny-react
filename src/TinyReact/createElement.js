export default function createElement(type, props, ...children) {
  //  [].concat(...children) 是将 children 做一次拷贝
  const childElements = [].concat(...children).reduce((result, child) => {
    // child 中取出 Boolean 和 null
    if (child !== false && child !== true && child !== null) {
      // 判断是否是 Object；如果不是，则是文本节点，再次调用 createElement 方法，将文字转化为文本节点对象
      if (child instanceof Object) {
        result.push(child)
      } else {
        result.push(createElement("text", { textContent: child }))
      }
    }
    return result
  }, [])
  return {
    type,
    props: Object.assign({ children: childElements }, props),// 给 props 添加 children 属性
    children: childElements
  }
}
