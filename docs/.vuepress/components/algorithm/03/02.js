// 优化解法，时间复杂度O(n)，空间复杂度O(n)
function trap(height) {
    if(!height.length) return 0;
    let left = []
    let lmax = rmax = 0
    let len = height.length
    let result = 0
    // 从前往后遍历
    for(let i = 0; i < len; i++) {
        lmax = Math.max(height[i], lmax)
        left[i] = lmax
    }
    // 从后往前遍历
    for(let i = len - 1; i >= 0; i--) {
        rmax = Math.max(height[i], rmax)
        result += Math.min(left[i],rmax) - height[i]
    }
    return result
};