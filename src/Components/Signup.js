import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, Input, InputLabel, FormHelperText, Button } from '@mui/material';
import "./Styles/Signin.css"

function SignUp() {
    const nav = useNavigate();
    const [bname, setBName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pwok, setPwOk] = useState(false);
    const [cpwok, setCpwOk] = useState(false);

    const [pwtxt, setPwtxt] = useState("");
    const [pwlength, setPwlength] = useState("");
    const [cpwtxt, setCpwtxt] = useState("");

    const handleBName = (event) => {
        setBName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        const val = event.target.value;
        setPassword(val);

        if (val.length < 8) {
            setPwlength("At least 8 characters");
            setPwOk(false);
        }
        else if (val.length >= 8) {
            setPwlength("");
        }

        let st = pwValidate(val);

        if (val === "") {
            setPwtxt("Please enter your Password");
            setPwOk(false);
        }
        else if (st === 1) {
            setPwtxt("Seriously..!!");
            setPwOk(false);
        }
        else if (st === 2) {
            setPwtxt("Try a little harder");
            setPwOk(false);
        }
        else if (st === 3) {
            setPwtxt("Almost there");
            setPwOk(false);
        }
        else if (st === 4 && val.length >= 8) {
            setPwtxt("");
            setPwOk(true);
        }

    }

    const handleCPassword = (event) => {
        const val = event.target.value;

        if (val === "") {
            setCpwtxt("Confirm your Password");
            setCpwOk(false);
        }
        else if (val === password) {
            setCpwtxt("");
            setCpwOk(true);
        }
        else {
            setCpwtxt("Passwords don't match");
            setCpwOk(false);
        }
    }

    //Validating the password
    const pwValidate = (pw) => {
        let strength = 0;

        if (pw.match(/(?=.*[a-z])/)) {
            strength++;
        }

        if (pw.match(/(?=.*[A-Z])/)) {
            strength++;
        }

        if (pw.match(/(?=.*[0-9])/)) {
            strength++;
        }

        if (pw.match(/(?=.*[!@#\$%\^&\*])/)) {
            strength++;
        }

        return strength;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const User = {
            "Business": bname,
            "Email": email,
            "Password": password,
        }

        console.log(User);

        if (pwok && cpwok) {
            fetch("http://localhost:8000/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(User)
            });

            nav("/signin");
        }

        else {
            alert("Check your credentials");
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
                    <InputLabel htmlFor="email">Business Name</InputLabel>
                    <Input
                        type="text"
                        id="bName"
                        onChange={handleBName}
                    />
                </FormControl>
                <br /><br />

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
                    <FormHelperText id="pwl-text" sx={{ color: "red", }}>{pwlength}</FormHelperText>
                    <FormHelperText sx={{ color: "red", }} >{pwtxt}</FormHelperText>
                </FormControl>
                <br /><br />

                <FormControl variant="standard">
                    <InputLabel htmlFor="cpw">Confirm Password</InputLabel>
                    <Input
                        type="password"
                        id="cpw"
                        onChange={handleCPassword}
                    />
                    <FormHelperText sx={{ color: "red" }}>{cpwtxt}</FormHelperText>
                </FormControl><br /><br />

                <Button sx={{
                    color: '#ffffff'
                }} variant="standard" onClick={handleSubmit}>Sign-Up</Button>
            </div>
        </Box>
    )
}

export default SignUp;

