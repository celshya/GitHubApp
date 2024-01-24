// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RepositoryDetailPage from './components/RepositoryDetailPage';
import FollowersPage from './components/FollowersPage';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repository/:id" element={<RepositoryDetailPage  />} />
        <Route path="/followers/:username" element={<FollowersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
