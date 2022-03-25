// 排序 + 双指针，时间复杂度O(n)
function findRepeat(arr) {
	const result = []
	let i = 0
	arr.sort()
	while(i < arr.length) {
		let str1 = (typeof arr[i] === 'object' && arr[i] !== null) ? JSON.stringify(arr[i]) : arr[i]
		let str2 = (typeof arr[i+1] === 'object' && arr[i+1] !== null) ? JSON.stringify(arr[i+1]) : arr[i+1]
		if(str1 === str2) {
			result.push(arr[i])
			i = i+2
		} else {
			i++
		}
	}
	return result
}

// [ 112, { a: 2 }, 'a' ]