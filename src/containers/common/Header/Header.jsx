import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import HeaderMenu from '@components/common/Header';
import { logoutUser } from '@reducers/auth';

const Header = (props) => {
  const handleLogout = () => {
    props.logoutUser();
    props.history.replace('/');
  };

  return (
    <Fragment>
      {props.loggedInUser && (
        <HeaderMenu onLogout={handleLogout} />
      )}
    </Fragment>
  );
};

function mapStateToProps({ auth }) {
  return {
    loggedInUser: auth.loggedInUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logoutUser
  }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
