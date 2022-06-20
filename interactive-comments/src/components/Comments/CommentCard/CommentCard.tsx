import React, { useState } from "react";

import Comment from "../../../interfaces/comment";
import Card from "../../UI/Card/Card";
import CommentActions from "../CommentActions/CommentActions";
import CommentBody from "../CommentBody/CommentBody";
import CommentScore from "../CommentScore/CommentScore";
import CommentUser from "../CommentUser/CommentUser";
import EditComment from "../EditComment/EditComment";
import styles from "./CommentCard.module.scss";

interface CommentCardProps {
  comment: Comment;
  onReply: () => void;
}

function CommentCard({ comment, onReply }: CommentCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const onEdit = () => {
    setIsEditing(true);
  };

  const onEditCancel = () => {
    setIsEditing(false);
  };

  return (
    <Card className={styles.commentCard}>
      <CommentUser
        className={styles.commentUser}
        user={comment.user}
        createdAt={comment.createdAt}
        isEdited={comment.isEdited}
      />
      {!isEditing && (
        <CommentBody
          className={styles.commentBody}
          content={comment.content}
          replyTo={comment.replyTo}
        />
      )}
      {isEditing && (
        <EditComment
          className={styles.commentBody}
          comment={comment}
          onCancelEditing={onEditCancel}
        />
      )}
      <CommentScore className={styles.commentScore} comment={comment} />
      <CommentActions
        className={styles.commentActions}
        comment={comment}
        onReply={onReply}
        onEdit={onEdit}
      />
    </Card>
  );
}

export default CommentCard;
