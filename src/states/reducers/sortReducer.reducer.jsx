import {
  BubbleSort,
  InsertionSort,
  QuickSort,
  SelectionSort,
} from "../../algorithms";

const initialState = {
  mainArray: [],
  tempArray: [],
  animationsArray: [],
  colorPalette: {
    mainColor: "",
    seconaryColor: "",
    pivotColor: "",
    completeColor: "",
  },
};

export default function sortReducer(state = initialState, action) {
  switch (action.type) {
    case "BUBBLE_SORT":
      return {
        ...state,
      };
    case "QUICK_SORT":
      return {
        ...state,
      };
    case "MERGE_SORT":
      return {
        ...state,
      };
    case "SELECTION_SORT":
      return {
        ...state,
      };
    default:
      return state;
  }
}
