import React from "react";

export default function Leaderboard(){
    const mockEntries = [
        { name: 'Alex', class: 'Hypercar', car: 'Porsche 963', laptime: '1:23.45', track: 'Monza' },
        { name: 'Sudeep', class: 'GT3', car: 'Ferrari 296 GT3', laptime: '1:21.30', track: 'Spa' }
    ];

    return (
        <div>
        <h2>Leaderboard</h2>
        <ul>
            {mockEntries.map((entry, i) => (
            <li key={i}>
                {entry.name} {entry.class} ({entry.car}) - {entry.laptime} @ {entry.track}
            </li>
            ))}
        </ul>
        </div>
    );
}