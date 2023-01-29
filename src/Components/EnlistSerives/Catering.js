import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, FormControl, Input, InputLabel, Button } from '@mui/material';

function Catering() {
    const nav = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [price, setPrice] = useState(0);

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handlePhone = (event) => {
        setPhone(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleWebsite = (event) => {
        setWebsite(event.target.value);
    }

    const handlePrice = (event) => {
        setPrice(event.target.value);
    }

    const handleEnlist = () => {

        const Details = {
            "Name": name,
            "Phone": phone,
            "Email": email,
            "Website": website,
            "Price": price,
            "Business": "Catering"
        }

        fetch("http://localhost:8000/enlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Details)
        })
            .then(() => { nav("/home") });

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
                    <InputLabel htmlFor="Name">Name</InputLabel>
                    <Input
                        type="text"
                        id="Name"
                        onChange={handleName}
                    />
                </FormControl>
                <br /><br />

                <FormControl variant="standard">
                    <InputLabel htmlFor="phone">Phone</InputLabel>
                    <Input
                        type="text"
                        id="phone"
                        onChange={handlePhone}
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
                    <InputLabel htmlFor="website">Website</InputLabel>
                    <Input
                        type="text"
                        id="website"
                        onChange={handleWebsite}
                    />
                </FormControl>
                <br /><br />

                <FormControl variant="standard">
                    <InputLabel htmlFor="price">Price</InputLabel>
                    <Input
                        type="text"
                        id="price"
                        onChange={handlePrice}
                    />
                </FormControl>
                <br /><br />

                <center>
                <Button sx={{
                    color: '#ffffff'
                }} variant="standard" onClick={handleEnlist}>Enlist Catering</Button>
                </center>
            </div>
        </Box>
    )
}

export default Catering;