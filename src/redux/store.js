import { createStore } from "redux";

const initialState = {

}

function reducer(state = initialState, action) {
    return state
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())