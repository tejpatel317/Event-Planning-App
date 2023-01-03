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
  const [events, setEvents] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((events) => setEvents(events));
  }, []);


  function handleNewEvent(newEvent) {
    setEvents([...events, newEvent])
  }

  console.log(events)


  return (
    <div className="App">
      <BrowserRouter>
      <Nav user={user} setUser={setUser}/>
        <Routes>
            <Route path="/"/>
              <Route index element={<Home events={events} user={user}/>}/>
              <Route path="Events" element={<Events/>} />
              <Route path="Create" element={<Create handleNewEvent={handleNewEvent}/>} />
              <Route path="Login" element={<Login setUser={setUser}/>} />
              <Route path="Signup" element={<Signup setUser={setUser}/>} />
            <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
