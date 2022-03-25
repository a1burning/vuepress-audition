Function.prototype.unCurry = function() {
    const self = this
    return function() {
        return Function.prototype.call.apply(this, arguments)
    }
}