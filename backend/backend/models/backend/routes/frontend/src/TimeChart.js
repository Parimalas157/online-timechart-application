import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function TimeChart({ entries }) {
    const grouped = entries.reduce((acc, curr) => {
        const date = new Date(curr.date).toLocaleDateString();
        acc[date] = (acc[date] || 0) + curr.duration;
        return acc;
    }, {});

    const labels = Object.keys(grouped);
    const data = Object.values(grouped);

    return (
        <div>
            <h3>Time Spent per Day</h3>
            <Bar
                data={{
                    labels,
                    datasets: [{ label: 'Hours', data, backgroundColor: 'skyblue' }]
                }}
            />
        </div>
    );
}
