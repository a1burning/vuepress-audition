// 使用for循环
Promise.race = function (promiseArray) {
    if(!Array.isArray(promiseArray)) {
        throw new TypeError('...')
    }
    return new Promise((resolve, reject) => {
        try {
            const length = promiseArray.length
            for(let i = 0; i < length; i++) {
                // 第一个返回直接resolve
                promiseArray[i].then(resolve, reject)
            }
        } catch(e) {
            reject(e)
        }
    })
}

// 使用forEach
Promise.race = promises => new Promise((resolve, reject) => {
    promises.forEach(promise => {
        promise.then(resolve, reject)
    })
})

