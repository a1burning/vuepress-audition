function shuffle(arr) {
    for(let i = 0; i < arr.length; i++) {
        // 每次生成i - arr.length的随机数
        let random = Math.floor(Math.random() * (arr.length - i) + i)
        // 交换元素
        let temp = arr[i]
        arr[i] = arr[random]
        arr[random] = temp
    }
    return arr
}