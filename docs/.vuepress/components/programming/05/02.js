const unCurry = fn => (...args) => fn.call(...args)