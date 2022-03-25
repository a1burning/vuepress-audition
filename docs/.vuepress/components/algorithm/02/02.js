// 辅助数组，时间复杂度O(n ^ 2)
function findRepeat(arr) {
	let result = []
	let arr1 = []
	arr.forEach((val) => {
		let str = (typeof val === 'object' && val !== null) ? JSON.stringify(val) : val
		if (arr1.includes(str)) {
			result.push(val)
		} else {
			arr1.push(str)
		}
	})
	return result
}

// [ 'a', { a: 2 }, 112 ]