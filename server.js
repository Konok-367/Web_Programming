
const express = require('express');
const taskRouter = require('./src/routes/tasks'); 

const app = express();


app.use(express.json());  

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime()  
  });
});      // ← THIS IS THE MOST IMPORTANT LINE

// In-memory storage
// In server.js, replace the tasks array
const tasks = [
  { id: 1, title: 'Sample Task 1', completed: false, priority: 'low', createdAt: new Date() },
  { id: 2, title: 'Sample Task 2', completed: true, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Sample Task 3', completed: false, priority: 'high', createdAt: new Date() },
  { id: 4, title: 'Sample Task 4', completed: false, priority: 'low', createdAt: new Date() },
  { id: 5, title: 'Sample Task 5', completed: true, priority: 'medium', createdAt: new Date() }
];
app.locals.tasks = tasks;

// Mount the router AFTER the middleware
app.use('/tasks', taskRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});