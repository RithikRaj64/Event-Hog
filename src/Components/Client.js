import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Client() {
    const navigate = useNavigate();
    const [hall, setHall] = useState(false);
    const [photography, setPhotography] = useState(false);
    const [catering, setCatering] = useState(false);
    const [budget, setBudget] = useState(0);
    const [people, setPeople] = useState(0);
    const [hours, setHours] = useState(0);

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

        if (res.Valid === true) {
            console.log(res.Result);
            navigate("/home");
        }

        console.log(needs);
    }

    return (
        <>
            <button onClick={handleHall}>Hall</button><br /><br />
            <button onClick={handlePhotography}>Photography</button><br /><br />
            <button onClick={handleCatering}>Catering</button><br /><br />
            <label>Budget</label>
            <input type="number" name="budget" onChange={handleBudget} /><br /><br />
            <label>People</label>
            <input type="number" name="people" onChange={handlePeople} /><br /><br />
            <label>Hours</label>
            <input type="number" name="hours" onChange={handleHours} /><br /><br />
            <button onClick={handleSubmit}>Sub</button>
        </>
    )
}

export default Client;