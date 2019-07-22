import React, { Component } from 'react';
import Input from '@components/common/FormElements/Input';

class Signup extends Component {
  state = {
    username: '',
    firstname: '',
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
        <form onSubmit={this.handleSubmit} className="p-5 max-width-400 card">
          <Input
            type="text"
            label="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <Input
            type="text"
            label="firstname"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.firstname}
          />
          <Input
            type="password"
            label="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
