import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Signup({setUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        first_name: firstName,
        last_name: lastName,
        email,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => console.log(err)); //FOR ERROR HANDLING LOGIC WILL BE ADDED LATER
      }
    });
  }

  return (
    <div className="form-container">
      <div className="form-details">
        <Form onSubmit={handleSubmit}>
          <h2 variant="success">Sign Up</h2>
          <p>It's free and only takes minutes</p>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={event => setUsername(event.target.value)}
              placeholder="Enter username"
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label className="mt-2">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="Enter password"
              required
            />
          </Form.Group>
          <Form.Group controlId="formPasswordConfirmation">
            <Form.Label className="mt-2">Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              value={passwordConfirmation}
              onChange={event => setPasswordConfirmation(event.target.value)}
              placeholder="Confirm password"
              required
            />
          </Form.Group>
          <Form.Group controlId="formFirstName">
            <Form.Label className="mt-2">First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
              placeholder="Enter first name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label className="mt-2">Last Name</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={event => setLastName(event.target.value)}
              placeholder="Enter last name"
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className="mt-2">Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Button variant="success" className="mt-3" type="submit">
            Sign Up
          </Button>
        </Form>
        <div className="text-center">Already have an account? <Link to="/Login">Login here</Link></div>
      </div>
    </div>
  )
}

export default Signup