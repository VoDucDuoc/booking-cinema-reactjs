const initialState = {
    ref: null
}

const scrollReducer = (state=initialState, action) =>{
    switch (action.type) {
        case "SCROLL": {
            window.scrollTo(0, action.ref?.current?.offsetTop)
            return {...state, ref: action.ref}
        }
    
        default:
            return state;
    }
}

export default scrollReducer;