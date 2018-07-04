import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>- netflux -</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">Browse</Link>
  </div>
);

export default Landing;
