import React from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCurrentUser } from "../../../app/slices/auth";
import { commentAdded } from "../../../app/slices/comments";
import Comment from "../../../interfaces/comment";
import Card from "../../UI/Card/Card";
import CommentForm from "../CommentForm/CommentForm";
import styles from "./AddComment.module.scss";

interface AddCommentProps {
  comment?: Comment;
  isReplying?: boolean;
  onExitReply?: () => void;
}

function AddComment({
  comment,
  isReplying = false,
  onExitReply,
}: AddCommentProps) {
  const currentUser = useAppSelector(getCurrentUser);

  const dispatch = useAppDispatch();

  const onAddComment = (content: string) => {
    dispatch(
      commentAdded({
        user: currentUser,
        content,
        parentId: comment?.parentId || comment?.id,
        replyTo: comment?.id,
      })
    );
    onExitReply && onExitReply();
  };

  return (
    <Card className={styles.addComment}>
      <CommentForm
        user={currentUser}
        buttonLabel={isReplying ? "REPLY" : "SEND"}
        placeholder={comment && `Replying to @${comment.user.username}`}
        onAddComment={onAddComment}
      />
    </Card>
  );
}

export default AddComment;
