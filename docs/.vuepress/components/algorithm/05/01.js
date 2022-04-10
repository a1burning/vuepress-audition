function quickSort (arr) {
    if (arr.length <= 1) return arr
    const left = []
    const right = []
    const current = arr.splice(0, 1)[0] // 注意splice之后，长度少了一个
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] < current) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return quickSort(left).concat(current, quickSort(right)) // 递归
}
quickSort(arr)