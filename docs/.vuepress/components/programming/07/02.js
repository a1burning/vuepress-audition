Promise.myrace = function (iterator) {
    return new Promise((resolve, reject) => {
        try {
            let it = iterator[Symbol.iterator]();
            while (true) {
                let res = it.next();
                if (res.done) break;
                if (res.value instanceof Promise) {
                    res.value.then(resolve, reject);
                } else {
                    resolve(res.value)
                }
            }
        } catch (error) {
            reject(error)
        }
    })
}