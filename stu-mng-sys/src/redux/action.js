import * as types from "./actionTypes";
import db from "../firebase";

const addStudent = () => ({
    type: types.ADD_STUDENT
});

export const addStudentInitiate = (student) => {
    return function(dispatch) {
        db.collection("students").doc().set(student);
        dispatch(addStudent());
    };
};
