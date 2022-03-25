const curry = fn => 
    judge = (...arg1) =>
        arg1.length >= fn.length ? fn(...arg1) :
        (...arg2) => judge(...arg1, ...arg2)