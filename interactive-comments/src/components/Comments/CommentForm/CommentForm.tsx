import React, { FormEvent, useEffect, useRef, useState } from "react";

import classNames from "../../../helpers/classNames";
import User from "../../../interfaces/user";
import styles from "./CommentForm.module.scss";

interface CommentFormProps {
  user: User;
  placeholder?: string;
  initialValue?: string;
  buttonLabel?: string;
  onAddComment: (content: string) => void;
}

function CommentForm({
  user,
  initialValue = "",
  placeholder = "Add a comment...",
  buttonLabel = "SEND",
  onAddComment,
}: CommentFormProps) {
  const [enteredComment, setEnteredComment] = useState(initialValue);
  const enteredCommentControlRef = useRef<HTMLTextAreaElement>(null);

  // useEffect(() => {
  //   enteredCommentControlRef.current &&
  //     enteredCommentControlRef.current.focus();
  // }, []);

  const handleEnteredCommentChange = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {
    setEnteredComment(event.currentTarget.value);
  };

  const handleAddComment = (event: FormEvent) => {
    event.preventDefault();

    onAddComment(enteredComment);
    setEnteredComment("");
  };

  return (
    <form className={styles.commentForm} onSubmit={handleAddComment}>
      <div className={styles.userImgWrap}>
        <img
          className={styles.userImg}
          src={user.photoURL}
          alt={user.username}
        />
      </div>
      <div className={styles.formControl}>
        <textarea
          ref={enteredCommentControlRef}
          placeholder={placeholder}
          value={enteredComment}
          onChange={handleEnteredCommentChange}
        ></textarea>
      </div>
      <button
        className={classNames(
          "btn btn-primary btn-lg",
          styles.addCommentButton
        )}
        disabled={enteredComment.trim().length === 0}
      >
        {buttonLabel}
      </button>
    </form>
  );
}

export default CommentForm;
