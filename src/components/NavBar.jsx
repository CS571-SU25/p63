import React from "react";
import { Link } from "react-router";

export default function Navbar() {
    return (
    <nav>
        <h2>RaceHub</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register for Event</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            <li><Link to="/schedule">Event Schedule</Link></li>
            <li><Link to="/discussion">Discussion Board</Link></li>
        </ul>
    </nav>
    );
}
