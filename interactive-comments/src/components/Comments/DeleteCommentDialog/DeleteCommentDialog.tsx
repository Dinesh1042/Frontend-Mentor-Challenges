import React from "react";

import { useAppDispatch } from "../../../app/hooks";
import { commentRemoved } from "../../../app/slices/comments";
import Comment from "../../../interfaces/comment";
import Modal from "../../UI/Modal/Modal";
import styles from "./DeleteCommentDialog.module.scss";

interface DeleteCommentDialogProps {
  comment: Comment;
  onClose: () => void;
}

function DeleteCommentDialog({ comment, onClose }: DeleteCommentDialogProps) {
  const dispatch = useAppDispatch();

  const handleDeleteComment = () => {
    dispatch(commentRemoved({ id: comment.id }));
    onClose();
  };

  return (
    <Modal className={styles.deleteCommentDialog} onClose={onClose}>
      <div className={styles.deleteCommentHeader}>
        <h4 className={styles.deleteCommentTitle}>Delete comment</h4>
      </div>
      <div className="modalBody">
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
      </div>
      <div className={styles.deleteCommentActions}>
        <button className="btn btn-secondary btn-lg" onClick={onClose}>
          NO, CANCEL
        </button>
        <button className="btn btn-danger btn-lg" onClick={handleDeleteComment}>
          YES, DELETE
        </button>
      </div>
    </Modal>
  );
}

export default DeleteCommentDialog;
