import React from 'react'
import MyEvents from './MyEvents'

function Events({userEvents}) {
  return (
  <div className="app-container">
    <h2 className="eventtitles">MY EVENTS</h2>
    <MyEvents userEvents={userEvents}/>
    <h2 className="eventtitles">RESERVATIONS</h2>
  </div>
  )
}

export default Events