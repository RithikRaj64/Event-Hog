import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, InputLabel, Button, Select, MenuItem } from '@mui/material';

function Home() {
    const Business = window.sessionStorage.getItem("Business");
    const nav = useNavigate();

    const [service, setService] = useState("");

    const handleBusiness = (event) => {
        setService(event.target.value);
    }

    const navigate = (event) => {
        nav(`/enlist${service}`);
    }

    return (
        <Box className='box' sx={{
            backgroundColor: '#f06292',
            width: 450,
            height: 520,
            borderRadius: 25
        }}>
            <div className='box-conts'>
                <center><h2>Hello {Business}</h2>
                    <h4>Select your business</h4></center>

                <FormControl>
                    <InputLabel id='sel'>Business</InputLabel>
                    <Select onChange={handleBusiness} label="Select" labelId='sel' sx={{ width: 200 }}>
                        <MenuItem value={''}></MenuItem>
                        <MenuItem value={'Hall'}>Hall</MenuItem>
                        <MenuItem value={'Photography'}>Photography</MenuItem>
                        <MenuItem value={'Catering'}>Catering</MenuItem>
                    </Select>
                </FormControl><br /><br />

                <center>
                    <Button sx={{
                        color: '#ffffff'
                    }} variant="standard" onClick={navigate}>Enlist</Button>
                </center>
            </div>
        </Box>
    )
}

export default Home;