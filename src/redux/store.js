import { createStore } from "redux";

const initialState = {
    employees: []
}

export function addEmployee(employee) {
    return {
        type: "addEmployee",
        payload: employee
    }
}

function reducer(state = initialState, action) {
    if (action.type === "addEmployee") {
        state.employees.push(action.payload)
        return {
            ...state,
            employees: state.employees
        }
    }

    return state
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())