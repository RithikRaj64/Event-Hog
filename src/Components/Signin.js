import React, { useState } from "react";
import { Box, FormControl, Input, InputLabel, Button } from '@mui/material';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        // write backend code for signin
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

                <center>
                    <Button sx={{
                        color: '#ffffff'
                    }} variant="standard" onClick={handleSubmit}>Sign-In</Button>
                </center>
            </div>
        </Box>
    )
}

export default SignIn;