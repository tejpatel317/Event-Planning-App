import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Create({}) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date().toJSON().slice(0,10));
  const [time, setTime] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        date,
        time,
        image_url: image,
      }),
    }).then((r) => {
      if (r.ok) {
        navigate('/')
      } else {
        r.json().then((err) => console.log(err)); //FOR ERROR HANDLING LOGIC WILL BE ADDED LATER
      }
    });
  }

  return (
    <div className="app-container">
      <div className="form-details">
        <Form onSubmit={handleSubmit}>
          <h2 variant="success">Create an Event</h2>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Enter event name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label className="mt-2">Location</Form.Label>
            <Form.Control
              type="test"
              value={location}
              onChange={event => setLocation(event.target.value)}
              placeholder="Enter location"
              required
            />
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label className="mt-2">Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={event => setDate(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTime">
            <Form.Label className="mt-2">Time</Form.Label>
            <Form.Control
              type="time"
              value={time}
              onChange={event => setTime(event.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label className="mt-2">Image</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={event => setImage(event.target.value)}
              placeholder="Enter image url"
              required
            />
          </Form.Group>
          <Button variant="success" className="mt-3" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Create