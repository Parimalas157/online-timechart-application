import React, { useEffect, useState } from 'react';
import TimeEntryForm from './components/TimeEntryForm';
import TimeChart from './components/TimeChart';
import TimeEntryList from './components/TimeEntryList';
import axios from 'axios';

function App() {
    const [entries, setEntries] = useState([]);

    const fetchEntries = async () => {
        const res = await axios.get('http://localhost:5000/api/time-entries');
        setEntries(res.data);
    };

    useEffect(() => {
        fetchEntries();
    }, []);

    return (
        <div className="App">
            <h1>Online Time Tracker</h1>
            <TimeEntryForm onAdd={fetchEntries} />
            <TimeEntryList entries={entries} onDelete={fetchEntries} />
            <TimeChart entries={entries} />
        </div>
    );
}

export default App;
