import React, {useState, useEffect} from "react";

export default function Leaderboard(){
    const [entries, setEntries] = useState([]);
    const [newEntry, setNewEntry] = useState({
        name: '',
        car: '',
        laptime: '',
        event: ''
    });

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('leaderboardEntries')) || [];
        setEntries(stored);
    }, []);

    useEffect(() => {
        localStorage.setItem('leaderboardEntries', JSON.stringify(entries));
    }, [entries]);

    const addEntry = (e) => {
        const {name, value} = e.target;
        setNewEntry((prev) => ({ ...prev, [name]: value }));
    }

    const submitEntry = (e) => {
        e.preventDefault();

        if(!newEntry.name || !newEntry.car || !newEntry.laptime || !newEntry.event){
            alert("Please fill out all fields before submitting entry.");
            return;
        }

        const updatedEntries = [...entries, { ...newEntry, id: Date.now() }];

        updatedEntries.sort((a, b) => {
            const toSeconds = (time) => {
                const [min, sec] = time.split(':');
                return parseFloat(min) * 60 + parseFloat(sec);
            };
            return toSeconds(a.laptime) - toSeconds(b.laptime);
        });

        setEntries(updatedEntries);
        setNewEntry({ name: '', car: '', laptime: '', event: '' });
    }

    return (
        <div>
        <h2>🏆 Leaderboard</h2>

        <form onSubmit={submitEntry} style={{ marginBottom: '20px' }}>
            <input
                name="name"
                value={newEntry.name}
                onChange={addEntry}
                placeholder="Driver name"
            />
            <input
                name="car"
                value={newEntry.car}
                onChange={addEntry}
                placeholder="Car model"
            />
            <input
                name="laptime"
                value={newEntry.laptime}
                onChange={addEntry}
                placeholder="Lap time (e.g., 1:23.45)"
            />
            <input
                name="event"
                value={newEntry.event}
                onChange={addEntry}
                placeholder="Event name"
            />
            <button type="submit">Submit Lap Time</button>
        </form>

        <div>
            {entries.length === 0 ? (
            <p>No leaderboard entries yet.</p>
            ) : (
            <table border="1" cellPadding="8">
                <thead>
                <tr>
                    <th>Driver</th>
                    <th>Car</th>
                    <th>Lap Time</th>
                    <th>Event</th>
                </tr>
                </thead>
                <tbody>
                {entries.map((entry) => (
                    <tr key={entry.id}>
                    <td>{entry.name}</td>
                    <td>{entry.car}</td>
                    <td>{entry.laptime}</td>
                    <td>{entry.event}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </div>
        </div>
    );

}