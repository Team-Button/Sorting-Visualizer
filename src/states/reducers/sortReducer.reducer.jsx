const initialState = {
  array: [],
  currentSort: [],
  currentSwap: [],
  pivot: [],
};

export default function sortReducer(state = initialState, action) {
  switch (action.type) {
    case BUBBLE_SORT:
      return {
        ...state,
        algorithm: action.payload,
        isAlgorithmSelected: true,
      };
    case QUICK_SORT:
      return {
        ...state,
        algorithm: null,
        errorMessage: action.payload,
        isAlgorithmSelected: false,
      };
    case MERGE_SORT:
      return {
        ...state,
        arraySize: action.payload.arraySize,
        array: action.payload.array,
      };
    default:
      return state;
  }
}
