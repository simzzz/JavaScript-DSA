function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentEl = arr[i]
        let prevIndex = i - 1

        while (prevIndex >= 0 && arr[prevIndex] > currentEl) {
            arr[prevIndex + 1] = arr[prevIndex]
            prevIndex--
        }
        arr[prevIndex + 1] = currentEl;
    }
    console.log(arr)
}

sort([5, 4, 3, 2, 1])