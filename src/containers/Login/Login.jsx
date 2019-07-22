import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '@components/Login';
import { loginUser } from '@reducers/auth';
import { setNotificationMessage } from '@reducers/notification';

const Login = (props) => {
  const handleSubmit = (data) => {
    const usernameExists = props.users.some(item => item.username === data.username);
    if (usernameExists) {
      props.loginUser(data);
    } else {
      props.setNotificationMessage({
        message: 'Hi',
        type: 'danger',
      });
    }
  };

  return (
    <LoginForm
      onSubmit={handleSubmit}
    />
  );
};

function mapStateToProps({ auth }) {
  return {
    users: auth.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginUser,
    setNotificationMessage
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
