const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
      } catch (err) {
        res.status(500).json({ error: 'Failed to fetch task' });
      }
});

router.post('/', async (req, res) => {
    try {
        const newTask = new Task({ taskName, assignedBy, assignedTo, status });
        await newTask.save();
        res.status(201).json(newTask);
      } catch (err) {
        res.status(400).json({ error: 'Failed to create task' });
      }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!updatedTask) return res.status(404).json({ error: 'Task not found' });
        res.json(updatedTask);
      } catch (err) {
        res.status(400).json({ error: 'Failed to update task' });
      }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ error: 'Task not found' });
        res.json({ message: 'Task deleted successfully' });
      } catch (err) {
        res.status(500).json({ error: 'Failed to delete task' });
      }
});

module.exports = router;