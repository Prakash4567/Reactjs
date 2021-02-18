import React from 'react';
import { Link } from "react-router-dom";

export function Links() {
  return (
    <div className="links">
      <Link to="/movies"><h2>Movies</h2></Link>
      <Link to="/calc"><h2>Calculator</h2></Link>
      <Link to="/lcd"><h2>Life-Cycle-Demo</h2></Link>
    </div>
  );
}
