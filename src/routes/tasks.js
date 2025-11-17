const express = require('express');
const router = express.Router();

// Add below POST route
router.get('/:id', (req, res) => {
  const idParam = req.params.id;
  if (isNaN(idParam) || parseInt(idParam) <= 0) {  // Check for non-numeric or invalid
    return res.status(400).json({
      error: 'Invalid ID format'
    });
  }
  const taskId = parseInt(idParam);
  const tasks = req.app.locals.tasks;
  const task = tasks.find(t => t.id === taskId);
  if (!task) {
    return res.status(404).json({
      error: 'Task not found'
    });
  }
  res.status(200).json({
    success: true,
    data: task
  });
});

router.post('/', (req, res) => {
  try {
    const { title } = req.body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Title is required and must be a non-empty string'
      });
    }

    

    const newTask = {
      id: Date.now(), 
      title: title.trim(),
      completed: false
    };

    const tasks = req.app.locals.tasks;
    tasks.push(newTask);

    res.status(201).json({
      success: true,
      data: newTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

module.exports = router;