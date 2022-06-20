import React, { useState } from "react";

import { useAppSelector } from "../../../app/hooks";
import { getCurrentUser } from "../../../app/slices/auth";
import classNames from "../../../helpers/classNames";
import Comment from "../../../interfaces/comment";
import DeleteIcon from "../../Icons/Delete";
import EditIcon from "../../Icons/Edit";
import ReplyIcon from "../../Icons/Reply";
import DeleteCommentDialog from "../DeleteCommentDialog/DeleteCommentDialog";
import styles from "./CommentActions.module.scss";

interface CommentActionsProps {
  comment: Comment;
  className?: string;
  onReply: () => void;
  onEdit: () => void;
}

function CommentActions({
  comment,
  className,
  onReply,
  onEdit,
}: CommentActionsProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const currentUser = useAppSelector(getCurrentUser);
  const isCommentOwner = currentUser.uid === comment.user.uid;

  const handleDeleteComment = () => {
    setIsDeleting(true);
  };

  const handleCancelDeleteComment = () => {
    setIsDeleting(false);
  };

  let actions = (
    <button className="btn btn-primary-light btn-icon" onClick={onReply}>
      <ReplyIcon />
      Reply
    </button>
  );

  if (isCommentOwner)
    actions = (
      <>
        <button
          className="btn btn-danger-light btn-icon"
          onClick={handleDeleteComment}
        >
          <DeleteIcon />
          Delete
        </button>
        <button className="btn btn-primary-light btn-icon" onClick={onEdit}>
          <EditIcon />
          Edit
        </button>
      </>
    );

  return (
    <>
      <div className={classNames(styles.commentActions, className)}>
        {actions}
      </div>
      {isDeleting && (
        <DeleteCommentDialog
          comment={comment}
          onClose={handleCancelDeleteComment}
        />
      )}
    </>
  );
}

export default CommentActions;
