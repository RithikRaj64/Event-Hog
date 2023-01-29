import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./Components/Signup";
import SignIn from './Components/Signin';
import Home from './Components/Home';
import Client from './Components/Client';
import Hall from './Components/EnlistSerives/Hall';
import Photography from './Components/EnlistSerives/Photography';
import Catering from './Components/EnlistSerives/Catering';
import Show from './Components/Show';
import "./Styles/Style.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/enlistHall" element={<Hall />} />
        <Route exact path="/enlistPhotography" element={<Photography />} />
        <Route exact path="/enlistCatering" element={<Catering />} />
        <Route exact path="/client" element={<Client />} />
        <Route exact path="/show" element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;