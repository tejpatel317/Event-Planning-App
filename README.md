# Community Events Project

Welcome to the New Jersey events application which will allow you to see and manage events in New Jersey. 

## Description

This application is intended for people that reside in New Jersey. Once a user has created an account and is signed in, the user will be able to create event cards that other users will be able to view. Other users will have to ability to RSVP and check in to events. The user that created the evnet will be able to edit the event or cancel the event entirely. Additionally, the craeator will be able to view how many users RSVPed to their event, and how many of those users are checked in to the event. 


## Usage

This applicaiton has three main navigation panels that users will have access to upon login. These panels are the home page, events page, and create page. On the home page, users will be able to view all the events posted by other users. They will be able to see the event location, time, date, and image. Additionally, they will have the option to RSVP to event. On the events page, the user will not only be able to view events they have created, but also see events which they have RSVPed to. Users will be able to cancel and edit events they created on this page. Additionally, for events that the user has RSVPed to, the users will be able to cancel the reservation or check_in to the event on this page. On the create page, the user will be able to create an event which will be shared to other users on the home page. 

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Render account
- Postgresql

## How To Use
- Fork the project 
- Run "bundle install" on your terminal
- Run "rails db:create" on your terminal
- Run "npm install --prefix client" on your terminal
- Start the rails backend server by running "rails s"
- Start the react frontend by running "npm start --prefix client" 