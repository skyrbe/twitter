import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '@components/common/FormElements/Input';
import styles from './Login.module.css';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="d-flex align-items-center justify-content-center flex-column fw fh">
        <h3 className="mb-4">
          Login to Twittter
        </h3>
        <form onSubmit={this.handleSubmit} className={`p-5 max-width-400 card ${styles.loginContainer}`}>
          <Input
            type="text"
            label="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <Input
            type="password"
            label="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit" className="btn btn-primary mt-3">Login</button>
          <Link to="/register" className="mt-2 mx-auto">
            Register
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
