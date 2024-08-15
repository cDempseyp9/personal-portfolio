import React, { useState } from 'react';

const AdminPanel = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you'd normally make a POST request to your backend
    console.log('Post created:', { title, content });
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default AdminPanel;
