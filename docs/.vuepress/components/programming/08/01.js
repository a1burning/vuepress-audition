function chunk(arr, num) {
    if (num === 0) return [];
    if (Array.isArray(arr) && typeof num === "number") {
        let result = [];
        let i = 0;
        while (i < arr.length) {
            result.push(arr.slice(i, i + num));
            i += num;
        }
        return result;
    } else {
        console.log("params type error");
    }
}