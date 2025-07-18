import React from 'react';

export default function EventSchedule() {
    const mockEvents = [
        { name: "Weekly Time Trial", date: "July 21", game: "Assetto Corsa" },
        { name: "Monthly Championship", date: "August 1", game: "Gran Turismo" }
    ];

    return (
        <div>
        <h2>Event Schedule</h2>
        <ul>
            {mockEvents.map((event, idx) => (
            <li key={idx}>{event.name} - {event.date} ({event.game})</li>
            ))}
        </ul>
        </div>
    );
}
