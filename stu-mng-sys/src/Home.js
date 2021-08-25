import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn, MDBTypography} from 'mdb-react-ui-kit';
import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector} from "react-redux";
import { addStudentInitiate } from './redux/action';



const initialState ={
    name: "",
    gender:"",
    grade:"",
    birthday:"",
    contact: "",
    email: "",
    address: ""
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 70,
        margin: "auto",
        padding: "15px",
        maxwidth: "500px",
        alignCotent: "center",
        "& > *": {
            margin: theme.spacing(1),
            width: "45ch",
        },
    },
}));


const Home = () => {
    const classes = useStyles();
    const [state, setStatus] = useState(initialState);
    const { name,gender,grade,birthday, contact, email, address} = state;
    const dispatch = useDispatch();


    const handleInputChange = (e) => {
        let { name,value } = e.target;
        setStatus({ ...state, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudentInitiate(state));
        setStatus({name:"", gender:"",grade:"", birthday:"", contact:"", email:"", address:""});
    };
    return (
        <MDBContainer fluid>
           <MDBRow>
                <MDBCol md="4">
                <form onSubmit={handleSubmit} className={classes.root}>
                        <MDBTypography className="text-start" variant="h4">Add Student</MDBTypography>
                        <MDBInput
                        label="Full Name"
                        value={name}
                        name="name"
                        type="text"
                        onChange={handleInputChange}
                        /><br/>
                        <MDBInput
                        label="Gender"
                        value={gender}
                        name="gender"
                        type="text"
                        onChange={handleInputChange}
                        /><br/>
                        <MDBInput
                        label="Grade"
                        value={grade}
                        name="grade"
                        type="number"
                        onChange={handleInputChange}
                        /><br/>
                        <MDBInput
                        label="Birthday (DD/MM/YYYY)"
                        value={birthday}
                        name="birthday"
                        type="text"
                        onChange={handleInputChange}
                        /><br/>
                        <MDBInput
                        label="Email"
                        value={email}
                        name="email"
                        type="text"
                        onChange={handleInputChange}
                        /><br/>
                        <MDBInput
                        label="Contact"
                        value={contact}
                        name="contact"
                        type="text"
                        onChange={handleInputChange}
                        /><br/>
                        <MDBInput
                        label="Address"
                        value={address}
                        name="address"
                        type="text"
                        onChange={handleInputChange}
                        /><br/>
                        <MDBBtn style={{width: "100px"}} color="success" type="submit">Submit</MDBBtn>

                    </form>
                </MDBCol>

                <MDBCol md="8">
                    <h2>Table</h2>
                </MDBCol>
            </MDBRow>
            
        </MDBContainer>
    )
}

export default Home