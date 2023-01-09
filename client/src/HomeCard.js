import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function HomeCard({user, event, addReservation}) {
    const {id, name, location, date, time, image_url} = event
    const navigate = useNavigate();

    function handleRSVP() {
      fetch("/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          event_id: id,
          checkin_status: false,
        }),
      }).then((r) => {
        if (r.ok) {
          navigate('/events')
          r.json().then((reservation) => addReservation(reservation))
        } else {
          r.json().then((err) => console.log(err)); //FOR ERROR HANDLING LOGIC WILL BE ADDED LATER
        }
      });
    }


  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image_url} alt="Image" className="cardimage"/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{location}</Card.Subtitle>  
            <Card.Text>{`Date: ${date}, Time: ${time}`}</Card.Text>  
            <Button className="homepagebutton" variant="success" onClick={handleRSVP}>RSVP</Button>
        </Card.Body>
    </Card>
  )
}

export default HomeCard