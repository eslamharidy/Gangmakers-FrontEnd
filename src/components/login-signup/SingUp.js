import React from 'react';

export default function Signup({ onSubmit, onChange, values }) {
  return (
    <div className="home-wrapper">
      <div className="block">
        <h2 className="title-home">Sign Up</h2>
        <form onSubmit={onSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={values.name}
              placeholder="Name"
              name="name"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">City</label>
            <input
              value={values.city}
              placeholder="City"
              className="form-control"
              name="city"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">Age</label>
            <input
              type="number"
              value={values.age}
              placeholder="Age"
              className="form-control"
              name="age"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              value={values.signupemail}
              placeholder="Email address"
              className="form-control"
              name="signupemail"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passoword">Password</label>
            <input
              type="password"
              value={values.signuppassword}
              placeholder="password"
              className="form-control"
              name="signuppassword"
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-home">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
