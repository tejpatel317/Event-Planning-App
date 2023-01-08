import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ReservationCard from './ReservationCard'

function Reservation({events, user, updateEvent, deleteEvent}) {

    const a = events.filter((event) => event.users.id === user.id)

    console.log(a)

  const reservationCards = events.filter(((event) => event.users.some(user => user.id === user.id))).map((event) => {
    return (<Col key={event.id} className="col-md-3 p-3"><ReservationCard event={event} user={user} updateEvent={updateEvent} deleteEvent={deleteEvent}/></Col>)
  })


  return (
    <Container className="p-0">
      <Row>
        {reservationCards}
      </Row>
    </Container>
  )
}

export default Reservation