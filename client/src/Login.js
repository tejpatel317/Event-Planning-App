import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    /*fetch("/signup", {
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
    });*/
  }


  return (
    <div className="signup-container">
      <div className="signup-form">
        <Form onSubmit={handleSubmit}>
          <h2 variant="success">Login</h2>
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
          <Button variant="success" className="mt-3" type="submit">
            Login
          </Button>
        </Form>
        <div className="text-center">Don't have an account? <Link to="/Signup">Sign Up</Link></div>
      </div>
    </div>
  )
}

export default Login