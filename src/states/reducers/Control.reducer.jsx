/*
controlState determine size, speed, which type of sort we're executing, and the current status of the visualizer
controlReducer change the state depending on the actions
*/

const controlState = {
  sortType: null,
  speed: null,
  arraySize: null,
  isSortTypeSelected: false,
  isVisualizing: false,
};

function controlReducer(state = controlState, action) {}

export default controlReducer;
