import React from 'react';
import Navbar  from '../components/Navbar/Navbar.jsx';

export const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    { children }
  </div>
)
