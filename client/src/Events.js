import React from 'react'
import MyEvents from './MyEvents'

function Events({events, loading, user, updateEvent, deleteEvent}) {

  if (loading) {
    return <div className="app-container"></div>;
  }

  return (
  <div className="app-container">
    <h2 className="eventtitles">MY EVENTS</h2>
    <MyEvents events={events} user={user} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
    <h2 className="eventtitles">RESERVATIONS</h2>
  </div>
  )
}

export default Events