const initialState = {
  isOpen: false,
  // url: ''
};
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_MODAL": {
      const isOpen = !state.isOpen;
      // const url = action.url;
      return { ...state, 
        isOpen, 
        // url 
    };
    }
    default:
      return state;
  }
};

export default modalReducer;
