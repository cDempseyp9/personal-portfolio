import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Projects from './components/Projects';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import AdminPanel from './components/AdminPanel';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
};

export default App;

