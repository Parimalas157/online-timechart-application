import React, { useState } from 'react';
import axios from 'axios';

export default function TimeEntryForm({ onAdd }) {
    const [task, setTask] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/time-entries', {
            task, duration: Number(duration), date
        });
        setTask(''); setDuration(''); setDate('');
        onAdd();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Task" />
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Hours" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );
}
