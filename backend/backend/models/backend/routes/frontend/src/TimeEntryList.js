import React from 'react';
import axios from 'axios';

export default function TimeEntryList({ entries, onDelete }) {
    const deleteEntry = async (id) => {
        await axios.delete(`http://localhost:5000/api/time-entries/${id}`);
        onDelete();
    };

    return (
        <ul>
            {entries.map((entry) => (
                <li key={entry._id}>
                    {entry.task} - {entry.duration} hrs on {new Date(entry.date).toDateString()}
                    <button onClick={() => deleteEntry(entry._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
