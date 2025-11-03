# Task Management API

## Project Overview
This is a simple Task Management API built with Node.js and Express.  
It allows users to view tasks, check API health, and fetch tasks by ID with proper error handling.

## Setup Instructions

1. Clone the repository:
   git clone https://github.com/Konok-367/Web_Programming.git

2. Navigate to project folder:
   cd task-management

3. Install dependencies:
   npm install

4. Start the server:
   npm start

5. Access the API:
   http://localhost:3000

## API Endpoints

| Method | Endpoint       | Description                                  |
|--------|----------------|----------------------------------------------|
| GET    | `/`            | Root route, shows API running message        |
| GET    | `/tasks`       | Returns a list of all tasks                  |
| GET    | `/task/:id`    | Returns a task by ID                         |
| GET    | `/health`      | Returns API status and uptime                |

## Sample Tasks JSON

[
  { "id": 1, "title": "Learn Node.js", "completed": false, "priority": "high", "createdAt": "2025-11-03T00:00:00.000Z" },
  { "id": 2, "title": "Build REST API", "completed": false, "priority": "medium", "createdAt": "2025-11-03T00:00:00.000Z" },
  { "id": 3, "title": "Test API with Postman", "completed": true, "priority": "low", "createdAt": "2025-11-03T00:00:00.000Z" },
  { "id": 4, "title": "Write Documentation", "completed": false, "priority": "medium", "createdAt": "2025-11-03T00:00:00.000Z" },
  { "id": 5, "title": "Push Code to GitHub", "completed": true, "priority": "high", "createdAt": "2025-11-03T00:00:00.000Z" }
]

## Notes

- Non-numeric IDs in `/task/:id` return 400 { "error": "Invalid ID format" }.
- Non-existent IDs return 404 { "error": "Task not found" }.
- Use Postman or any HTTP client to test the endpoints.
- node_modules/ is excluded from GitHub; install dependencies using npm install.
