import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import Create from './Create';
import Events from './Events';
import Login from './Login';
import Signup from './Signup';
import Unauthorized from './Unauthorized';

function App() {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch("/events")
      .then((r) => r.json())
      .then((events) => {
        setEvents(events)
        setLoading(false)});
  }, [user]);


  function handleNewEvent(newEvent) {
    setEvents([...events, newEvent])
  }

  function updateEvent(updatedEvent) {
    const newEvents = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent
      } else {
        return event
      }
    })
    setEvents(newEvents)
  }

  function deleteEvent(deletedEvent) {
    const newEvents = events.filter((event)=> event.id !== deletedEvent.id)
    setEvents(newEvents)
  }

  function addReservation(reservation) {
    const newEvents = events.map((event) => {
      if (event.id === reservation.event_id) {
        return { ...event, reservations: [...event.reservations, reservation]}
      } else {
        return event
      }
    })
    setEvents(newEvents)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Nav user={user} setUser={setUser}/>
        {
          user ?
            (<Routes>
              <Route path="/"/>
                <Route index element={<Home events={events} user={user} loading={loading} addReservation={addReservation}/>}/>
                <Route path="Events" element={<Events events={events} loading={loading} user={user} updateEvent={updateEvent} deleteEvent={deleteEvent}/>} />
                <Route path="Create" element={<Create handleNewEvent={handleNewEvent} loading={loading}/>} />
                <Route path="Login" element={<Login setUser={setUser} setLoading={setLoading}/>} />
                <Route path="Signup" element={<Signup setUser={setUser} setLoading={setLoading}/>} />
              <Route/>
            </Routes>) 
          :
            (<Routes>
              <Route path="/"/>
                <Route index element={<Unauthorized/>}/>
                <Route path="Events" element={<Unauthorized/>}/>
                <Route path="Create" element={<Unauthorized/>}/>
                <Route path="Login" element={<Login setUser={setUser} setLoading={setLoading}/>} />
                <Route path="Signup" element={<Signup setUser={setUser} setLoading={setLoading}/>} />
              <Route/>
            </Routes>) 
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
