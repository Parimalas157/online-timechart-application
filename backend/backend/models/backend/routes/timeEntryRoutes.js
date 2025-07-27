const express = require('express');
const router = express.Router();
const TimeEntry = require('../models/TimeEntry');

router.get('/', async (req, res) => {
    const entries = await TimeEntry.find();
    res.json(entries);
});

router.post('/', async (req, res) => {
    const { task, duration, date } = req.body;
    const newEntry = new TimeEntry({ task, duration, date });
    await newEntry.save();
    res.json(newEntry);
});

router.delete('/:id', async (req, res) => {
    await TimeEntry.findByIdAndDelete(req.params.id);
    res.json({ success: true });
});

module.exports = router;
