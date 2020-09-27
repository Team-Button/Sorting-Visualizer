/*
store and update algorithm, speed, size, and status of global state
*/
import {
  SET_ARRAY,
  SET_ALGORITHM,
  SET_ALGORITHM_ERROR,
  START_THE_VISUALIZATION,
  END_OF_VISUALIZATION,
} from "../actions";

const initialState = {
  algorithm: null,
  speed: null,
  arraySize: 10,
  isAlgorithmSelected: false,
  isVisualizing: false,
  array: [9, 5, 10, 8, 6, 3, 7, 2, 1, 4],
  currentSort: [],
  errorMessage: null,
};

export default function configReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALGORITHM:
      return {
        ...state,
        algorithm: action.payload,
        isAlgorithmSelected: true,
      };
    case SET_ALGORITHM_ERROR:
      return {
        ...state,
        algorithm: null,
        errorMessage: action.payload,
        isAlgorithmSelected: false,
      };
    case SET_ARRAY:
      return {
        ...state,
        arraySize: action.payload.arraySize,
        array: action.payload.array,
      };
    case START_THE_VISUALIZATION:
      return {
        ...state,
        isVisualizing: true,
      };
    case END_OF_VISUALIZATION:
      return {
        ...state,
        isVisualizing: false,
      };
    default:
      return state;
  }
}
