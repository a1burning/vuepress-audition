Array.prototype._map = function(callback) {
    const arr = this
    return this.reduce((prev, item, index, arr) => {
        prev.push(callback(item, index, arr))
        return prev
    }, [])
}