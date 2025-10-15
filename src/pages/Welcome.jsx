import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="card">
      <div className="hero-dots">
        <div className="dot pos6">6</div>
        <div className="dot pos1">1</div>
        <div className="dot pos2">2</div>
        <div className="dot pos3">3</div>
        <div className="dot pos4">4</div>
        <div className="dot pos5">5</div>
      </div>

      <div className="card-body bottom">
        <h2>Welcome to PopX</h2>
        <p className="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <Link to="/register" className="btn primary">Create Account</Link>
        <Link to="/login" className="btn secondary">Already Registered? Login</Link>
      </div>
    </div>
  );
}
