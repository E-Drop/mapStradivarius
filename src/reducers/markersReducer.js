const markersReducer = (state = {markers: []}, action) => {
  switch (action.type) {
    case 'ADD_MARKER': {
      const { payload = {} } = action;
      return {
        markers: [...state.markers,payload],
      };
    }
    default:
      return state;
  }
}

export default markersReducer;