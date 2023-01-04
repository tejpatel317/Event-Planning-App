import React from 'react'
import { Card, Button } from 'react-bootstrap'

function MyEventCard({user, event}) {
    const {id, name, location, date, time, image_url} = event

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image_url} alt="Image" className="cardimage"/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{location}</Card.Subtitle>  
            <Card.Text>{`Date: ${date}, Time: ${time}`}</Card.Text>  
            <Button variant="success">RSVP</Button>
        </Card.Body>
    </Card>
  )
}

export default MyEventCard