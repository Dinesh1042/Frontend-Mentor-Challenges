import React from "react";

import { useAppDispatch } from "../../../app/hooks";
import { commentUpdated } from "../../../app/slices/comments";
import classNames from "../../../helpers/classNames";
import Comment from "../../../interfaces/comment";
import EditCommentForm from "../EditCommentForm/EditCommentForm";
import styles from "./EditComment.module.scss";

interface EditCommentProps {
  className?: string;
  comment: Comment;
  onCancelEditing: () => void;
}

function EditComment({
  comment,
  className,
  onCancelEditing,
}: EditCommentProps) {
  const dispatch = useAppDispatch();

  const onUpdateComment = (content: string) => {
    dispatch(
      commentUpdated({
        id: comment.id,
        content,
      })
    );
    onCancelEditing();
  };

  return (
    <div className={classNames(styles.editComment, className)}>
      <EditCommentForm
        initialValue={comment.content}
        onUpdate={onUpdateComment}
        onCancelEditing={onCancelEditing}
      />
    </div>
  );
}

export default EditComment;
