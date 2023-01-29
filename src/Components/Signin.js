import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <>
            <form>
                <label forId="email">Email : </label>
                <input type="email" id="email" onChange={handleEmail} /><br /><br />

                <label forId="pw">Password : </label>
                <input type="password" id="pw" onChange={handlePassword} /><br /><br />

                <button id="signin" onClick={handleSubmit}>Signin</button>
            </form>
        </>
    )
}

export default SignIn;