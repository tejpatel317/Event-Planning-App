import React from 'react'
import { Card, Button } from 'react-bootstrap'

function ReservationCard({user, event, deleteReservation}) {

    const {name, location, date, time, image_url} = event

    const selectedReservation = event.reservations.find(reservation => reservation.user_id === user.id)

    function handleDeleteReservation(){
        fetch(`/reservations/${selectedReservation.id}`, {
          method: "DELETE",
          })
          .then((r) => {
            if (r.ok) {
              deleteReservation(selectedReservation)
            } else {
              r.json().then((err) => console.log(err)); //FOR ERROR HANDLING LOGIC WILL BE ADDED LATER
            }
        });
      }

  return (
    <>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image_url} alt="Image" className="cardimage"/>
          <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>{location}</Card.Subtitle>  
              <Card.Text>{`Date: ${date}, Time: ${time}`}</Card.Text>  
              <Button className="eventpagebutton" variant="danger" onClick={handleDeleteReservation}>CANCEL RSVP</Button>
              <Button className="eventpagebutton" variant="success">CHECK IN</Button>
          </Card.Body>
      </Card>
    </>
  )
}

export default ReservationCard