/*
1. 去重、排序
2. 用map记录，之后用values输出
*/

function formArray(arr) {
    const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
    const map = new Map();
    sortedArr.forEach((v) => {
        const key = Math.floor(v / 10);
        const group = map.get(key) || [];
        group.push(v);
        map.set(key, group);
    });
    return [...map.values()];
}