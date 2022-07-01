import React, { useState, useCallback } from 'react';

import { Button, TextField, DisplayText } from '@shopify/polaris';

import data from "../data/userDetails";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Registration() {
    let navigate = useNavigate();


    const [name, setName] = useState("");
    const [svalue, setSvalue] = useState("");
    const [spass, setSpass] = useState("");

    const handleSubmitNameChange = useCallback((newValue) => setName(newValue), []);
    const handleSubmitEmailChange = useCallback((newValue) => setSvalue(newValue), []);
    const handleSubmitPasswordChange = useCallback((newValue) => setSpass(newValue), []);

    function handleSubmitSignUp() {
        if (validate() == true) {
            const newData = { name: name, email: svalue, pass: spass };
            data.push(newData);
            console.log("Successful");
            navigate("../login");
            setName("");
            setSvalue("");
            setSpass("");
        }
        else {
            alert("Some field is missing");
            console.log("Unsuccessful");
        }
    }

    function validate() {
        if (name.length == 0 || svalue.length == 0 || spass.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }


    return (
        <>
            <TextField
                label="Name"
                type="text"
                value={name}
                onChange={handleSubmitNameChange}
                autoComplete="email"
            />

            <TextField
                label="Email"
                type="email"
                value={svalue}
                onChange={handleSubmitEmailChange}
                autoComplete="email"
            />

            <TextField
                label="Password"
                type="password"
                value={spass}
                onChange={handleSubmitPasswordChange}
                autoComplete="password"
            />

            <DisplayText size="small">Already have an account! <Link to="/"> LogIn </Link></DisplayText>

            <Button onClick={handleSubmitSignUp}>Sign Up</Button>

        </>


    );
}

export default Registration;