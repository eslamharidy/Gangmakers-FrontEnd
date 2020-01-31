import React from 'react';
import '../styling/login.css';

export default function Login({ onSubmit, onChange, values }) {
  return (
    <div className="home-wrapper">
      <div className="block">
        <h1 className="title-home">Have an account?</h1>

        <form onSubmit={onSubmit} className="form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={values.email}
              placeholder="Email address"
              name="email"
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={values.password}
              placeholder="Password"
              name="password"
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-home">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
