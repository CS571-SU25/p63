import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import NavBar from './components/NavBar';
import RaceHub from './components/RaceHub';
import EventRegistration from './components/EventRegistration';
import Leaderboard from './components/Leaderboard';
import EventSchedule from './components/EventSchedule';
import DiscussionBoard from './components/DiscussionBoard';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<RaceHub />} />
          <Route path="/register" element={<EventRegistration />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/schedule" element={<EventSchedule />} />
          <Route path="/discussion" element={<DiscussionBoard />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;