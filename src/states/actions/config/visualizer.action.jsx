export const START_THE_VISUALIZATION = "START_THE_VISUALIZATION";
export const END_OF_VISUALIZATION = "END_OF_VISUALIZATION";

/*
start & end visualization
*/

export const startVisualizer = () => (dispatch) => {
  dispatch({
    type: START_THE_VISUALIZATION,
  });
};

export const endVisualizer = (dispatch) => () => {
  dispatch({
    type: END_OF_VISUALIZATION,
  });
};
