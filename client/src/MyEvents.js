import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import MyEventCard from './MyEventCard.js'

function MyEvents({events, user, updateEvent}) {

  const userEventCards = events.filter(((event) => event.user_id === user.id)).map((event) => {
    return (<Col key={event.id} className="col-md-3 p-3"><MyEventCard event={event} user={user} updateEvent={updateEvent}/></Col>)
  })


  return (
    <Container className="p-0">
      <Row>
        {userEventCards}
      </Row>
    </Container>
  )
}

export default MyEvents