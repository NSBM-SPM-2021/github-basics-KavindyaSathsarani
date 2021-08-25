<<<<<<< Updated upstream
=======
import * as types from "./actionTypes";
import db from "../firebase";


const getStudents = (students) => ({
    type: types.GET_STUDENTS,
    payload: students,

});

export const getStudentsInitiate = () => {
    return function(dispatch){
        db.collection("students").onSnapshot((querySnapshot) => {
            const students = [];
            querySnapshot.forEach((doc) => {
                students.push({...doc.data(), id: doc.id})
            })
            dispatch(getStudents(students));
        });
    }
}

const addStudent = () => ({
    type: types.ADD_STUDENT,

});

export const addStudentInitiate = (student) => {
    return function(dispatch) {
        db.collection("students").doc().set(student);
        dispatch(addStudent());
    };
};
>>>>>>> Stashed changes
