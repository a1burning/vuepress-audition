// 优化解法，时间复杂度O(n)
function twoSum(arr, target) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i
    }
    for (let i = 0; i < arr.length; i++) {
        var d = target - arr[i]
        if (map[d] && map[d] !== i) {
            return [i, map[d]]
        }
    }
}