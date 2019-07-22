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
      <div className="d-flex align-items-center justify-content-center fw fh">
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
          <Link to="/register" className="m-auto">
            Register
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
