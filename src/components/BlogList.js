import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/blog/${post._id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.content.slice(0, 100)}...</p>
            <small>{new Date(post.date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
