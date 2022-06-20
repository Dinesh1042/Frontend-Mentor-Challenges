import React from "react";

import { store } from "../../../app/store";
import classNames from "../../../helpers/classNames";
import User from "../../../interfaces/user";
import styles from "./CommentBody.module.scss";

interface CommentBodyProps {
  content: string;
  replyTo: string | null;
  className?: string;
}

// TODO: use reselect for grabbing users

const users = store
  .getState()
  .comments.reduce((acc: { [id: string]: User }, val) => {
    acc[val.id] = val.user;
    return acc;
  }, {});

function CommentBody({ content, replyTo, className }: CommentBodyProps) {
  return (
    <div className={classNames(styles.commentBody, className)}>
      <p className={styles.content}>
        {replyTo && (
          <a className={styles.replyTo}>@{users[replyTo].username}</a>
        )}{" "}
        {content}
      </p>
    </div>
  );
}

export default CommentBody;
