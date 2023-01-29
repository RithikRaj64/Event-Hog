import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, Input, InputLabel, Button } from '@mui/material';
import "./Styles/Signin.css"

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const User = {
            "Email": email,
            "Password": password,
        }

        console.log(User);

        let res = await fetch("http://localhost:8000/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(User)
        });
        res = await res.json();

        if (res.Valid == true) {
            window.sessionStorage.setItem('Business', res.Business);
            navigate("/home");
        }
        else {
            if (res.Reason == "Email") {
                alert("The email you have entered is incorrect");
            }
            else {
                alert("The password you have entered is incorrect");
            }
        }
    }

    return (
        <Box className='box' sx={{
            backgroundColor: '#f06292',
            width: 450,
            height: 520,
            borderRadius: 25
        }}>
            <div className='box-conts'>

                <FormControl variant="standard">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input
                        type="email"
                        id="email"
                        onChange={handleEmail}
                    />
                </FormControl>
                <br /><br />

                <FormControl variant="standard">
                    <InputLabel htmlFor="pw">Password</InputLabel>
                    <Input
                        type="password"
                        id="pw"
                        onChange={handlePassword}
                    />
                </FormControl>
                <br /><br />

                <Button sx={{
                    color: '#ffffff'
                }} variant="standard" onClick={handleSubmit}>Sign-In</Button>
            </div>
        </Box>
    )
}

export default SignIn;