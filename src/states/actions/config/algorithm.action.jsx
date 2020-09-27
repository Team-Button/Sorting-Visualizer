export const SET_ALGORITHM = "SET_CONFIG";
export const SET_ALGORITHM_ERROR = "SET_CONFIG_ERROR";

/*
set algorithm configuration in store
*/

export const updateAlgorithm = (payload) => (dispatch) => {
  if (!payload.algorithm) {
    dispatch({
      type: SET_ALGORITHM_ERROR,
      payload: "Please select algorithm",
    });
  } else {
    dispatch({
      type: SET_ALGORITHM,
      payload: payload,
    });
  }
};
