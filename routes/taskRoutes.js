const express = require('express');
const { createTask, getTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Route to create a task
router.post('/tasks', authMiddleware, createTask);

// Route to get all tasks for the logged-in user
router.get('/tasks', authMiddleware, getTasks);

// Route to get a single task by ID
router.get('/tasks/:id', authMiddleware, getTaskById);

// Route to update a task by ID
router.put('/tasks/:id', authMiddleware, updateTask);

// Route to delete a task by ID
router.delete('/tasks/:id', authMiddleware, deleteTask);

module.exports = router;
