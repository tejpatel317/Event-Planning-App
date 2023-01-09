import React from 'react'
import MyEvents from './MyEvents'
import Reservation from './Reservation';

function Events({events, loading, user, updateEvent, deleteEvent, deleteReservation, updateReservation}) {

  if (loading) {
    return <div className="app-container"></div>;
  }

  return (
  <div className="app-container">
    <h2 className="eventtitles">MY EVENTS</h2>
    <MyEvents events={events} user={user} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
    <h2 className="eventtitles">RESERVATIONS</h2>
    <Reservation events={events} user={user} deleteReservation={deleteReservation} updateReservation={updateReservation}/>
  </div>
  )
}

export default Events