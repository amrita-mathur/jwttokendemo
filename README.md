# Node.js JWT Authentication Example

This is a simple Node.js application demonstrating JWT (JSON Web Token) authentication. It includes a login route that generates a JWT upon successful authentication and a protected route that requires a valid JWT for access.

## Prerequisites

- Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- npm (Node Package Manager) comes with Node.js.

## Setup

1. Installing dependencies:

   npm install express
   npm install jsonwebtoken

## Running the server
1. Start the server
    node server.js

The server will be running at http://localhost:3000.

2. Use a tool like Postman or cURL to test the authentication:

    a. Send a POST request to http://localhost:3000/login to get a JWT.
    b. Copy the JWT and use it as a bearer token in the Authorization header of a GET request to http://localhost:3000/protected.
