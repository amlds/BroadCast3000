import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Device from './views/Device';
import NotFound from './views/NotFound';

const Root: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/device" element={<Device />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default Root;
