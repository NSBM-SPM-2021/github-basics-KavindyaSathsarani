import * as types from "./actionTypes";
import db from "../firebase"; 


const getStudents = (students) => ({
    type: types.GET_STUDENTS,
    payload: students,

});

const deleteStudent = () => ({
    type: types.DELETE_STUDENT,
});

const addStudent = () => ({
    type: types.ADD_STUDENT,
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
    };
};

export const addStudentInitiate = (student) => {
    return function (dispatch){
        db.collection("students").doc().set(student);
        dispatch(addStudent());
    };
};

export const deleteStudentInitiate = (id) => {
    return function (dispatch){
        db.collection("students").doc(id).delete();
        dispatch(deleteStudent());
    };
};