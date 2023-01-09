import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HomeCard from './HomeCard'

function Home({events, user, loading}) {


  if (loading) {
    return <div className="app-container"></div>;
  }

  const homeCards = events.filter(((event) => event.user_id !== user.id)).filter
    ((event) => !event.users.some(oneuser => oneuser.id === user.id)).map((event) => {
    return (<Col key={event.id} className="col-md-3 p-3"><HomeCard event={event} user={user}/></Col>)
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