// 暴力解法，时间复杂度O(n ^ 2)
function twoSum(nums, target) {
    for(var i = 0 ; i <= nums.length -1 ; i++){
        for(var j = i+1 ; j <= nums.length-1 ; j++){
            if(nums[j] + nums[i] == target){
                return [i,j]
            }
        }
    }
};