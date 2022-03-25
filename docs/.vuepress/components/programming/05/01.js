function unCurry(fn) {
    return function () {
        var obj = [].shift.call(arguments)
        return fn.apply(obj, arguments)
    }
}