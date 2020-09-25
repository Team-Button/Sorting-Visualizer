export const BubbleSort = () => {
        let swaps = true
        while (swaps) {
            swaps = false
            for (let i = 0; i < array.length; i++) {
                if (arr[i] > arr[i + 1]) {
                    arr[i], arr[i + 1] = arr[i + 1], arr[i]
                    swaps = true
                }
            }
        }
        return arr
}
