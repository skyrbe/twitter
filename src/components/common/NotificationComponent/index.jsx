import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import v4 from 'uuid/v4';
import styles from './notification.module.css';

const NotificationComponent = (props) => {
  const { notifMessage } = props;
  const itemsList = notifMessage.map((data) => {
    console.log('data ', data);
    const classes = data.type === 'danger' ? styles.failureToast : styles.successToast;
    return (
      <CSSTransition key={v4()} timeout={500} classNames="move">
        <div key={data.id} className={classes}>
          <span>
            {data.message}
          </span>
          {data.autoClose && (
            <button type="button" className={styles.closeButton} onClick={() => props.closeNotification(data.id)}>
              x
            </button>
          )}
        </div>
      </CSSTransition>
    );
  });
  return (
    <TransitionGroup className={styles.notificationContainer}>
      {itemsList}
    </TransitionGroup>
  );
};

NotificationComponent.defaultProps = {
  autoClose: true,
};

export default NotificationComponent;
