// map + 计数器，时间复杂度O(n ^ 2)
function findRepeat(arr) {
	let map = new Map()
	let result = []
	arr.forEach((val) => {
		const str = (typeof val === 'object' && val !== null) ? JSON.stringify(val) : val
		map.set(str, map.get(str) ? map.get(str) + 1 : 1)
	})
	map.forEach((val, key) => {
		if (val > 1) {
			try {
				result.push(JSON.parse(key))
			} catch (error) {
				result.push(key)
			}
		}
	})
	return result
}

// map的遍历还可以
for(let [k, v] of map.entries()) {
    if(v > 1) {
        try {
            result.push(JSON.parse(k))
        } catch (error) {
            result.push(k)
        }
    }
}

// [ 'a', { a: 2 }, 112 ]