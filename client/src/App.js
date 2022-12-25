import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Create from './Create';
import Events from './Events';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null);

  console.log(user)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
            <Route path="/"/>
              <Route index element={<Home/>}/>
              <Route path="Events" element={<Events/>} />
              <Route path="Create" element={<Create/>} />
              <Route path="Login" element={<Login setUser={setUser}/>} />
              <Route path="Signup" element={<Signup setUser={setUser}/>} />
            <Route/>
        </Routes>
        <h1>{!user ? 'hello' : user.first_name}</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
