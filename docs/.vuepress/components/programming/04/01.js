const curry = fn => {
    return tempFn = (...args1) => {
        if (arg1.length >= fn.length) {
            return fn(...arg1)
        } else {
            return (...arg2) => tempFn(...arg1, ...arg2)
        }
    }
}