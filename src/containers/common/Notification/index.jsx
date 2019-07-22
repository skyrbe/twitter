import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NotificationComponent from '@components/common/NotificationComponent';
import {
  closeNotification
} from '@reducers/notification';

const Notification = (props) => {
  const { notifMessage, autoClose, closeNoty } = props;
  return (
    <div>
      <NotificationComponent
        notifMessage={notifMessage}
        autoClose={autoClose}
        closeNotification={closeNoty}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  notifMessage: state.notification.message,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    closeNoty: closeNotification
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
