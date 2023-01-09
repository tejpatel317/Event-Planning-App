import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HomeCard from './HomeCard'

function Home({events, user, loading, addReservation}) {


  if (loading) {
    return <div className="app-container"></div>;
  }

  const homeCards = events.filter(((event) => event.user_id !== user.id)).filter
    ((event) => !event.reservations.some(reservation => reservation.user_id === user.id)).map((event) => {
    return (<Col key={event.id} className="col-md-3 p-3"><HomeCard event={event} user={user} addReservation={addReservation}/></Col>)
  })


  return (
    <div className="app-container">
      <Container className="p-0">
        <Row>
          {homeCards}
        </Row>
      </Container>
    </div>
  )
}

export default Home