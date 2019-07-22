import React from 'react';
import { Link } from 'react-router-dom';
import { distanceInWordsToNow } from 'date-fns';
import styles from './Tweet.module.css';

const Tweet = ({
  data,
  canEdit,
  onEdit,
  canDelete,
  onDelete,
  isfromLoggedInUser
}) => {
  const editIcon = () => {
    return (
      <div className="float-left cursor-pointer" onClick={() => onEdit(data)}>
        <i
          className={`budicon-edit ${styles.edit}`}
        />
        <span className="fs-14">
          Edit
        </span>
      </div>
    );
  };

  const deleteIcon = () => {
    return (
      <div className="float-left cursor-pointer" onClick={() => onDelete(data.id)}>
        <i
          className={`budicon-delete ${styles.delete}`}
        />
        <span className="fs-14">
          Delete
        </span>
      </div>
    );
  };
  return (
    <div className={styles.tweet}>
      <div className="d-flex align-items-end">
        <span className={styles.author}>
          {data.postedBy}
        </span>
        <span className={styles.postedTime}>
          {distanceInWordsToNow(data.postedAt)}
        </span>
      </div>
      <Link className={styles.content} to={`/tweet/${data.id}`}>
        {data.content}
      </Link>
      {isfromLoggedInUser && (
        <div className={styles.actionsContainer}>
          {canEdit && editIcon()}
          {canDelete && deleteIcon()}
        </div>
      )}
    </div>
  );
};

export default Tweet;
