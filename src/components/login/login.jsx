import React from 'react';

import {  Button, TextField, DisplayText } from '@shopify/polaris';

import data from "../data/userDetails";

import { useState, useCallback } from "react";

import { Link } from 'react-router-dom';

function LogIn() {

    const [value, setValue] = useState("");
    const [pass, setPass] = useState("");

    const handleEmailChange = useCallback((newValue) => setValue(newValue), []);
    const handlePasswordChange = useCallback((newValue) => setPass(newValue), []);

    function handleSubmit() {
        if (validate() == true) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].email == value && data[i].pass == pass) {
                    localStorage.setItem("User",JSON.stringify(data[i]));
                    console.log("Welcome", data[i].name);
                }
            }
        }
        else {
            alert("Some Field is missing!");
        }
    }

    function validate() {
        if (value.length == 0 || pass.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }


    return (

        <>
            <TextField
                label="Email"
                type="email"
                value={value}
                onChange={handleEmailChange}
                autoComplete="email"
            />

            <TextField
                label="Password"
                type="password"
                value={pass}
                onChange={handlePasswordChange}
                autoComplete="password"
            />

            <DisplayText size="small">Don't have an account! <Link to="/signup"> SignUp </Link></DisplayText>

            <Button onClick={handleSubmit}>LogIn</Button>

        </>
    );
}

export default LogIn;