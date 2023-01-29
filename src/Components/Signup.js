import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <>
            <form>
                <label forId="businessName">Business Name : </label>
                <input type="text" id="businessName" onChange={handleBName} /><br /><br />

                <label forId="email">Email : </label>
                <input type="email" id="email" onChange={handleEmail} /><br /><br />

                <label forId="pw">Password : </label>
                <input type="password" id="pw" onChange={handlePassword} />
                <p style={{ color: "red" }}>{pwlength}</p>
                <p style={{ color: "red" }}>{pwtxt}</p>

                <label forId="cpw">Confirm Password : </label>
                <input type="password" id="cpw" onChange={handleCPassword} />
                <p style={{ color: "red" }}>{cpwtxt}</p>

                <button id="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default SignUp;

// const [name, setName] = useState("");
// const [type, setType] = useState("");
// const handleType = (event) => {
//     setType(event.target.value);
// }
// const handleName = (event) => {
//     setName(event.target.value);
// }


/* <label forId="type">Type : </label>
        <select id="type" onChange={handleType}>
        <option value=""></option>
        <option value="Halls">Hall</option>
        <option value="Photographers">Photographer</option>
        </select><br /><br /> */


        // <label forId="name">UserName : </label>
        // <input type="text" id="name" onChange={handleName} /><br /><br />