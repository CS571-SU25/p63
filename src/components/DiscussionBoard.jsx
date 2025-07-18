import React, { useState, useEffect } from 'react';

export default function DiscussionBoard() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

    // Load posts from localStorage on mount
    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('communityPosts')) || [];
        setPosts(storedPosts);
    }, []);

    // Save posts to localStorage on change
    useEffect(() => {
        localStorage.setItem('communityPosts', JSON.stringify(posts));
    }, [posts]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newPost.title || !newPost.content || !newPost.author) {
        alert("All fields are required!");
        return;
        }
        const updatedPosts = [...posts, { ...newPost, id: Date.now() }];
        setPosts(updatedPosts);
        setNewPost({ title: '', content: '', author: '' });
    };

    return (
        <div>
        <h2>🏁 RaceHub Community Board</h2>

        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
            name="author"
            value={newPost.author}
            onChange={handleInputChange}
            placeholder="Your name"
            />
            <input
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            placeholder="Post title"
            />
            <textarea
            name="content"
            value={newPost.content}
            onChange={handleInputChange}
            placeholder="Write your post..."
            />
            <button type="submit">Post</button>
        </form>

        <div>
            {posts.length === 0 ? (
            <p>No posts yet. Be the first to start a discussion!</p>
            ) : (
            posts.map((post) => (
                <div key={post.id} style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
                <h3>{post.title}</h3>
                <p><strong>{post.author}</strong> says:</p>
                <p>{post.content}</p>
                </div>
            ))
            )}
        </div>
        </div>
    );
}
