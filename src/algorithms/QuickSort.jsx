export const quickSort(arr, low = 0, high = 0) {
    // We leave it as an exercise to the viewer of this code to implement this method.
    if (high - low <= 0) {
      return arr;
    }

    let pivot = low;
    for (let i = low + 1; i < high + 1; i++) {
      if (arr[i] < arr[pivot]) {
        let temp = arr[i];
        arr[i] = arr[pivot + 1];
        arr[pivot + 1] = temp;
        temp = arr[pivot];
        arr[pivot] = arr[pivot + 1];
        arr[pivot + 1] = temp;
        pivot += 1;
      }
    }

    arr = this.quickSort(arr, low, pivot - 1);
    arr = this.quickSort(arr, pivot + 1, high);

    return arr;
}