import React, { useState } from 'react';

export default function EventRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        car: '',
        event: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registered:', formData);
        // localStorage or Bucket API logic goes here
    };

    return (
        <form onSubmit={handleSubmit}>
        <h2>Register for an Event</h2>
        <input name="name" placeholder="Your Name" onChange={handleChange} />
        <input name="car" placeholder="Your Car" onChange={handleChange} />
        <input name="event" placeholder="Event Name" onChange={handleChange} />
        <button type="submit">Submit</button>
        </form>
    );
}