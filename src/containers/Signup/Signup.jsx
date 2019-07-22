import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignupForm from '@components/Signup';
import { signupUser } from '@reducers/auth';
import { setNotificationMessage } from '@reducers/notification';

const Signup = (props) => {
  const handleSubmit = (data) => {
    const usernameExists = props.users.some(item => item.username === data.username);
    if (!usernameExists) {
      props.signupUser(data);
      props.history.push(`/${data.username}`);
    } else {
      props.setNotificationMessage({
        message: 'Username already exists',
        type: 'danger',
      });
    }
  };

  return (
    <SignupForm
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
    signupUser,
    setNotificationMessage
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
