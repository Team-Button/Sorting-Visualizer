export const SET_ARRAY = "SET_CONFIG";
export const SET_ARRAY_ERROR = "SET_CONFIG_ERROR";

/*
set speed and arraysize config in the store
*/

export const updateArray = (newSize) => (dispatch) => {
  let newArray = [];
  while (newArray.length < newSize) {
    newArray.push(Math.floor(Math.random() * 200) + 10);
  }
  dispatch({
    type: SET_ARRAY,
    payload: { array: newArray, arraySize: newSize },
  });
};
