/**
1. 排序，遍历用下标承接了，每一项进行去重判断
2. 最后进行过滤
*/

function splitArr(arr) {
    let arr1 = [...arr].sort((a, b) => a - b);
    let result = []
    arr1.forEach(val => {
        const rest = Math.floor(val / 10)
        if (Array.isArray(result[rest])) {
            if(!result[rest].includes(val)) result[rest].push(val)
        } else {
            result[rest] = [val]
        }
    })
    return result.filter(val => Array.isArray(val))
}