import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '@components/Login';
import { loginUser } from '@reducers/auth';
import { setNotificationMessage } from '@reducers/notification';

const Login = (props) => {
  const handleSubmit = (data) => {
    const user = props.users.find(item => item.username === data.username);
    if (user) {
      if (user.password === data.password) {
        props.loginUser(data);
        props.history.push(`/${data.username}`);
      } else {
        props.setNotificationMessage({
          message: 'Invalid Password',
          type: 'danger',
        });
      }
    } else {
      props.setNotificationMessage({
        message: 'User Doesn\'t Exist',
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
