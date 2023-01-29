import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <>
            <h1>Hello {Business}</h1>
            <h1>Select your business</h1>

            <select onChange={handleBusiness}>
                <option value=""></option>
                <option value="Hall">Hall</option>
                <option value="Photography">Photography</option>
                <option value="Catering">Catering</option>
            </select><br /><br />

            <button onClick={navigate}>Enlist</button>
        </>
    )
}

export default Home;