import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, FormControl, Input, FormHelperText, Button } from '@mui/material';
import Card from "./Card";

function Client() {
    const navigate = useNavigate();
    const [hall, setHall] = useState(false);
    const [photography, setPhotography] = useState(false);
    const [catering, setCatering] = useState(false);
    const [budget, setBudget] = useState(0);
    const [people, setPeople] = useState(0);
    const [hours, setHours] = useState(0);
    const [needs, setNeeds] = useState([]);
    const [show, setShow] = useState(false);

    const handleHall = () => {
        if (!hall) {
            setHall(!hall);
        }
        else {
            setHall(!hall);
        }
    }

    const handlePhotography = () => {
        if (!photography) {
            setPhotography(!photography);
        }
        else {
            setPhotography(!photography);
        }
    }

    const handleCatering = () => {
        if (!catering) {
            setCatering(!catering);
        }
        else {
            setCatering(!catering);
        }
    }

    const handleBudget = (event) => {
        setBudget(event.target.value);
    }

    const handlePeople = (event) => {
        setPeople(event.target.value);
    }

    const handleHours = (event) => {
        setHours(event.target.value);
    }

    const handleSubmit = async () => {
        const needs = {
            "Hall": hall,
            "Photography": photography,
            "Catering": catering,
            "Budget": budget,
            "People": people,
            "Hours": hours
        }

        let res = await fetch("http://localhost:8000/client", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(needs)
        });
        res = await res.json();

        window.sessionStorage.setItem("prop", needs)

        if (res.Valid === true) {
            console.log(res.Result);
            setNeeds(res.Result);
            setShow(true);
            alert("Scroll down to see your partners");
        }
        else {
            alert("Your budget is too low. Please increase your budget");
        }
    }

    const done = needs.map(el => <Card props={el} />);

    return (
        <>
            <Box className='box' sx={{
                backgroundColor: '#f06292',
                width: 450,
                height: 520,
                borderRadius: 25
            }}>
                <div className='box-conts'>
                    <center>
                        <h4>Select your Services</h4>
                        <Button sx={{
                            color: '#ffffff'
                        }} variant="standard" onClick={handleHall}>Hall
                            <FormHelperText sx={{ fontSize: 20 }}>{hall ? "✔️" : ""}</FormHelperText>
                        </Button><br />

                        <Button sx={{
                            color: '#ffffff'
                        }} variant="standard" onClick={handlePhotography}>Photography
                            <FormHelperText sx={{ fontSize: 20 }}>{photography ? "✔️" : ""}</FormHelperText>
                        </Button><br />

                        <Button sx={{
                            color: '#ffffff'
                        }} variant="standard" onClick={handleCatering}>Catering
                            <FormHelperText sx={{ fontSize: 20 }}>{catering ? "✔️" : ""}</FormHelperText>
                        </Button><br /><br />

                    </center>


                    <FormControl variant="standard">
                        <FormHelperText>Give your budget</FormHelperText>
                        <Input
                            type="number"
                            id="budget"
                            onChange={handleBudget}
                        />
                    </FormControl>
                    <br /><br />

                    <FormControl variant="standard">
                        <FormHelperText>How many people will attend the event</FormHelperText>
                        <Input
                            type="number"
                            id="people"
                            onChange={handlePeople}
                        />
                    </FormControl>
                    <br /><br />

                    <FormControl variant="standard">
                        <FormHelperText>How long will the event take</FormHelperText>
                        <Input
                            type="number"
                            id="hours"
                            onChange={handleHours}
                        />
                    </FormControl>
                    <br /><br />

                    <center>
                        <Button sx={{
                            color: '#ffffff'
                        }} variant="standard" onClick={handleSubmit}>Get My Partners 😉</Button>
                    </center>
                </div>
            </Box>

            <div class="result">
                {show ? <ul class="list">{done}</ul> : ""}
            </div>
        </>
    )
}

export default Client;