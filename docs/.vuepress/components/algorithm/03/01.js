// 暴力解法，时间复杂度O(n)，空间复杂度O(n)
function trap(height) {
    if(!height.length) return 0;
    let left = []
    let right = []
    let lmax = rmax = 0
    let len = height.length
    let result = 0
    // 把左右最大出水量求出来
    for(let i = 0; i < len; i++) {
        lmax = Math.max(height[i], lmax)
        rmax = Math.max(height[len-i-1], rmax)
        left[i] = lmax
        right[len- i - 1] = rmax
    }
    // 算出最小的然后累加
    for(let i = 0; i < len; i++) {
        result += Math.min(left[i],right[i]) - height[i]
    }
    return result
};

// 最后的累加可以使用reduce
return height.reduce((prev, item, index) => {
    return prev + Math.min(left[index],right[index]) - item
}, 0)
