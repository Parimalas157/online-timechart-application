const mongoose = require('mongoose');

const TimeEntrySchema = new mongoose.Schema({
    task: String,
    duration: Number,
    date: Date
});

module.exports = mongoose.model('TimeEntry', TimeEntrySchema);
