import React from 'react';
import '../../styling/login.css';
import '../../App.css';
import { connect } from 'react-redux';
import { login, signup } from '../../actions/login';
import Login from './Login';
import SignUp from './SingUp';

class HomeContainer extends React.Component {
  state = {
    name: '',
    city: '',
    age: 0,
    email: '',
    password: '',
    signupemail: '',
    signuppassword: ''
  };

  componentDidUpdate() {
    const { user } = this.props;
    
    if(user) {
      this.props.history.push("/");

    }
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.props.history.push("/");
  };
  signUp = event => {
    event.preventDefault();
    let profile = {
      name: this.state.name,
      city: this.state.city,
      age: this.state.age,
      email: this.state.signupemail,
      password: this.state.signuppassword
    }
    this.props.signup(profile);

    this.props.history.push("/");
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      
      <div style={{marginTop:'40%'}}>
        <div className="row h-50">
          <div className="col-md-6 col-right">
            <Login
              onSubmit={this.onSubmit}
              onChange={this.onChange}
              values={this.state}
            />
          </div>
          <div className="col-md-6 col-left">
            <SignUp
              onSubmit={this.signUp}
              onChange={this.onChange}
              values={this.state}
            />
          </div>
        </div>
  
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { login, signup })(HomeContainer);
