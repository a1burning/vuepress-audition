function quickSort (arr, low, high) {
    let i = low
    let j = high
    let temp = arr[i]
    while (i < j) {
        while (i < j && arr[j] >= temp) j--;
        if (i < j) arr[i++] = arr[j]
        while (i < j && arr[i] <= temp) i++;
        if (i < j) arr[j--] = arr[i]
    }
    arr[i] = temp
    if (low < i - 1) quickSort(arr, low, i - 1)         
    if (high > i + 1) quickSort(arr, i + 1, high)
}
quickSort(arr, 0, arr.length-1)