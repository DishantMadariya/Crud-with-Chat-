const Task = require('../models/taskModel');

// Create a new task
const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = new Task({
            title,
            description,
            user: req.user._id  // Associate task with the logged-in user
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Error creating task' });
    }
};

// Get all tasks for the logged-in user
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user._id });  // Only fetch tasks belonging to the logged-in user
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
};

// Get a single task by ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user._id });  // Ensure the task belongs to the logged-in user
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching task' });
    }
};

// Update a task by ID
const updateTask = async (req, res) => {
    const { title, description, status } = req.body;
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user._id });  // Ensure the task belongs to the logged-in user
        if (!task) return res.status(404).json({ error: 'Task not found' });

        // Update task fields if provided
        if (title) task.title = title;
        if (description) task.description = description;
        if (status) task.status = status;

        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error updating task' });
    }
};

// Delete a task by ID
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user._id });  // Ensure the task belongs to the logged-in user
        if (!task) return res.status(404).json({ error: 'Task not found' });

        await task.remove();
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting task' });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};
