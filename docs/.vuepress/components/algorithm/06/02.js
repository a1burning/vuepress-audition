function quickSort(arr) {
    if (arr.length <= 1) return arr
    let left = []
    let right = []
    let current = arr.splice(0,1)[0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].score < current.score) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat(current, quickSort(right))
}