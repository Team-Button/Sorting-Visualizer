export const SelectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let cur_index = i;
    let smallest_index = cur_index;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest_index]) {
        smallest_index = j;
      }
    }

    let temp = arr[cur_index];
    arr[cur_index] = arr[smallest_index];
    arr[smallest_index] = temp;
  }
  return arr;
};
