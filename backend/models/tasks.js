const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    assignedBy: {
        type: String,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);