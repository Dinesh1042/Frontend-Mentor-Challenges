import React from "react";
import TimeAgo from "react-timeago";

import { useAppSelector } from "../../../app/hooks";
import { getCurrentUser } from "../../../app/slices/auth";
import classNames from "../../../helpers/classNames";
import User from "../../../interfaces/user";
import styles from "./CommentUser.module.scss";

interface CommentUserProps {
  user: User;
  createdAt: number;
  isEdited: boolean;
  className?: string;
}

function CommentUser({
  user,
  createdAt,
  isEdited,
  className,
}: CommentUserProps) {
  const currentUser = useAppSelector(getCurrentUser);
  const isCommentOwner = currentUser.uid === user.uid;

  return (
    <div className={classNames(styles.commentUser, className)}>
      <img className={styles.userImg} src={user.photoURL} alt={user.username} />
      <h4 className={styles.username}>{user.username}</h4>

      {isCommentOwner && <span className={styles.badge}>you</span>}

      <p className={styles.createdAt}>
        <TimeAgo date={createdAt} minPeriod={5}></TimeAgo>
      </p>
      {isEdited && <p className={styles.isEdited}>(Edited)</p>}
    </div>
  );
}

export default CommentUser;
