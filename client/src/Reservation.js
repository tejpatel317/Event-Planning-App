import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import ReservationCard from './ReservationCard'

function Reservation({events, user, updateEvent, deleteEvent}) {

  const reservationCards = events.filter(((event) => event.reservations.some(reservation => reservation.user_id === user.id))).map((event) => {
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