Array.prototype._map = function(callback) {
    const arr = this
    const result = []
    this.forEach((val, index) => {
        result.push(callback.call(arr, val, index, arr))
    })
    return result
}