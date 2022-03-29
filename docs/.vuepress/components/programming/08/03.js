// 1. 计算出根据size要有多少个数组，用Array.from创建框架
// 2. 遍历框架，将内容截取放进去
function chunk(arr, size){
    return Array.from({length: (size = Number.parseInt(size)) ? Math.ceil(arr.length/size) : 0})
      .map((a,i) => arr.slice(i*size, (i+1)*size))
}