# Task Manager API

A simple RESTful API for managing tasks using Node.js and Express.

## Setup Instructions
1. Clone the repo or create the folder structure.
2. Run `npm install` to install dependencies.
3. Start the server: `node server.js`.
4. Server runs on http://localhost:3000.

## Run Instructions
- Use Postman to test endpoints.
- Stop server with Ctrl+C, restart with `node server.js`.

## API Endpoints
- GET / : Not implemented (default root, returns nothing).
- GET /tasks : Retrieve all tasks.
- POST /tasks : Create a new task (body: {"title": "string"}).
- GET /tasks/:id : Retrieve a task by ID.
- GET /health : Check server health.