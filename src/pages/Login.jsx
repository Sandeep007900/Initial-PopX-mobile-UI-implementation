import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="card">
      <div className="card-body top">
        <h1>Signin to your<br/>PopX account</h1>
        <p className="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

        <div className="form">
          <label>Email Address</label>
          <input placeholder="Enter email address" />

          <label>Password</label>
          <input placeholder="Enter password" />

          <button className="btn disabled block">Login</button>
        </div>
      </div>
    </div>
  );
}
