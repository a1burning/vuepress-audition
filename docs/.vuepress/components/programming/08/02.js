const chunk = (arr, len) => arr.reduce((pre, cur, index) => {
    // 如果是index的倍数，就创建一个新数组
    if (index % len === 0) {
      pre.push([cur])
      return pre
    }
    // 获取数组最后的元素，将元素push进去
    const temp = pre[pre.length - 1]
    temp && temp.push(cur)
    return pre
}, [])