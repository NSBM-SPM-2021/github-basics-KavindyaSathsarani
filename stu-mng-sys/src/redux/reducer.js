<<<<<<< Updated upstream
=======
import * as types from "./actionTypes"

const initialState = {
    students: [],
};

const studentReducer = (state = initialState, action) => {
    switch (action.type) {   
        case types.GET_STUDENTS:
            return {
                ...state,
               students: action.payload,
            };
        default:
            return state;
    }
};

export default studentReducer;
>>>>>>> Stashed changes
