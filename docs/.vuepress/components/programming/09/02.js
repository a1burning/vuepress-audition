function shuffle(arr) {
    // 从后往前遍历
    for(let i = arr.length - 1; i > 0; i--) {
        // 每次生成0-(i+1)的随机数
        let random = Math.floor(Math.random() * (i + 1))
        // 交换当前元素
        let temp = arr[i]
        arr[i] = arr[random]
        arr[random] = temp
    }
    return arr
}