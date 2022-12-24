import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Create from './Create';
import Events from './Events';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null);



  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path="/"/>
              <Route index element={<Home/>}/>
              <Route path="Events" element={<Events/>} />
              <Route path="Create" element={<Create/>} />
              <Route path="Login" element={<Login/>} />
              <Route path="Signup" element={<Signup setUser={setUser}/>} />
            <Route/>
        </Routes>
        <h1></h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
