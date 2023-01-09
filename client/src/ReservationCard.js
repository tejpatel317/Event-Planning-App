import React from 'react'
import { Card, Button } from 'react-bootstrap'

function ReservationCard({user, event}) {

    const {id, name, location, date, time, image_url, reservations} = event

    const selectedReservation = event.reservations.find(reservation => reservation.user_id === user.id)


    function handleDeleteReservation(){
        fetch(`/reservations/${selectedReservation.id}`, {
          method: "DELETE",
          })
          .then((r) => {
            if (r.ok) {
              console.log(reservations)
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
              <Button className="eventpagebutton" variant="danger">CANCEL RSVP</Button>
              <Button className="eventpagebutton" variant="success" onClick={handleDeleteReservation}>CHECK IN</Button>
          </Card.Body>
      </Card>
    </>
  )
}

export default ReservationCard