import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hall() {
    const nav = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [price, setPrice] = useState(0);
    const [address, setAddress] = useState("");

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

    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleEnlist = () => {

        const Details = {
            "Name": name,
            "Phone": phone,
            "Email": email,
            "Website": website,
            "Price": price,
            "Address": address,
            "Business": "Hall"
        }

        fetch("http://localhost:8000/enlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Details)
        })
            .then(() => { nav("/home") });
    }

    return (
        <>
            <label>Name</label>
            <input type="text" id="Name" onChange={handleName} /><br /><br />
            <label>Address</label>
            <textarea type="text" id="Address" onChange={handleAddress} /><br /><br />
            <label>Phone</label>
            <input type="text" id="Phone" onChange={handlePhone} /><br /><br />
            <label>Email</label>
            <input type="email" id="Email" onChange={handleEmail} /><br /><br />
            <label>Website</label>
            <input type="text" id="Website" onChange={handleWebsite} /><br /><br />
            <label>Price</label>
            <input type="text" id="Price" onChange={handlePrice} /><br /><br />
            <button onClick={handleEnlist}>Enlist Hall</button>

            <p>{name}</p>
            <p>{price}</p>
        </>
    )
}

export default Hall;