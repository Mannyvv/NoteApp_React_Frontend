# Note App with React, Server.js, Postgress

## Overview

This repository contains the code for the front end of a Note app built using React. The app allows users to post notes on a virtual board for all to see.
"Read a Note, Leave a Note"

## Features

- Users can enter a title and content in a small form.
- The input is then turned into a "post-it" note that is displayed on the virtual wall.
- A tour is available for first-time users to get acquainted with the app.

## Technologies Used

- React.js for the front end.
- Express.js server for CRUD actions.
- PostgreSQL database hosted on ElephantSQL to store data.

## Installation

To run the project, follow these steps:

1. Clone the repository.
2. Run `npm start`.

## Configuration

The fetch call point to my heroku express.js server, which is connected to my postgres database. The traffic is minimal so feel free to use as needed.

## Backend Server
If you want to create your own express server on Heroku using Docker containers.
Please see the backend github for this project [here.](https://github.com/Mannyvv/NoteApp_React_Backend)

## Acknowledgments

This project was inspired by [this video](https://youtu.be/2MoSzSlAuNk?si=1rGZTVCdfxUXz1Hw). Thank you [Chris Blakely](https://www.youtube.com/@ChrisBlakely/videos)

