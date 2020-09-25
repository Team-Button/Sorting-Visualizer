export const START = "START";

/*
start visualization
*/

export const startVisualizer = (dispatch) => () => {
  dispatch({
    type: START,
  });
};
