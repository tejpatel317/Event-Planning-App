import React, { useState } from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap'

function MyEventCard({user, event}) {
    const {id, name, location, date, time, image_url} = event
    const [show, setShow] = useState(false);
    const [editFormName, setEditFormName] = useState(name);
    const [editFormLocation, setEditFormLocation] = useState(location);
    const [editFormDate, setEditFormDate] = useState(date);
    const [editFormTime, setEditFormTime] = useState(convertTo24Hour(time));
    const [editFormImage, setEditFormImage] = useState(image_url);

    function handleClose() {
      setShow(false);
    }

    function handleOpen() {
      setShow(true);
    }

    function handleSubmit(e) {
      e.preventDefault();
      fetch(`/events/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editFormName,
          location: editFormLocation,
          date: editFormDate,
          time: editFormTime,
          image_url: editFormImage,
        }),
      }).then((r) => {
        if (r.ok) {
          navigate('/')
          r.json().then((newEvent) => handleNewEvent(newEvent))
        } else {
          r.json().then((err) => console.log(err)); //FOR ERROR HANDLING LOGIC WILL BE ADDED LATER
        }
      });
    }

    function convertTo24Hour(timeString) {
      let hours = parseInt(timeString.substring(0, 2));
      let minutes = timeString.substring(3, 5);
      let ampm = timeString.substring(5, 7);
    
      if (ampm === "PM" && hours < 12) {
        hours += 12;
      }
      if (ampm === "AM" && hours === 12) {
        hours = 0;
      }
    
      // Add leading zero if hour is single digit
      if (hours < 10) {
        hours = `0${hours}`;
      }
    
      return `${hours}:${minutes}`;
    }

  return (
    <>
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image_url} alt="Image" className="cardimage"/>
          <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Subtitle>{location}</Card.Subtitle>  
              <Card.Text>{`Date: ${date}, Time: ${time}`}</Card.Text>  
              <Button className="eventpagebutton" variant="danger">Cancel</Button>
              <Button className="eventpagebutton" variant="primary" onClick={handleOpen}>Edit</Button>
          </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} className="eventform-details">
          <Form onSubmit={handleSubmit}>
            <h2 variant="success">Edit Event</h2>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={editFormName}
                onChange={event => setEditFormName(event.target.value)}
                placeholder="Enter event name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label className="mt-2">Location</Form.Label>
              <Form.Control
                type="test"
                value={editFormLocation}
                onChange={event => setEditFormLocation(event.target.value)}
                placeholder="Enter location"
                required
              />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label className="mt-2">Date</Form.Label>
              <Form.Control
                type="date"
                value={editFormDate}
                onChange={event => setEditFormDate(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label className="mt-2">Time</Form.Label>
              <Form.Control
                type="time"
                value={editFormTime}
                onChange={event => setEditFormTime(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label className="mt-2">Image</Form.Label>
              <Form.Control
                type="text"
                value={editFormImage}
                onChange={event => setEditFormImage(event.target.value)}
                placeholder="Enter image url"
                required
              />
            </Form.Group>
            <Modal.Footer className="modalfooter">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}  type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
      </Modal>
    </>
  )
}

export default MyEventCard