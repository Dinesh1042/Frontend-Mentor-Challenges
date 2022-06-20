import React, { FormEvent, useState } from "react";

import styles from "./EditCommentForm.module.scss";

interface EditCommentFormProps {
  initialValue: string;
  onUpdate: (content: string) => void;
  onCancelEditing: () => void;
}

function EditCommentForm({
  initialValue = "",
  onUpdate,
  onCancelEditing,
}: EditCommentFormProps) {
  const [enteredComment, setEnteredComment] = useState(initialValue);

  const isValidComment = enteredComment.trim().length > 0;

  const handleUpdateComment = (e: FormEvent) => {
    e.preventDefault();
    if (!isValidComment) return;

    onUpdate(enteredComment);
  };

  const handleEnteredCommentChange = (
    e: React.FormEvent<HTMLTextAreaElement>
  ) => {
    setEnteredComment(e.currentTarget.value);
  };

  return (
    <form className={styles.editCommentForm} onSubmit={handleUpdateComment}>
      <textarea
        value={enteredComment}
        autoFocus
        placeholder="Update comment..."
        onChange={handleEnteredCommentChange}
      ></textarea>
      <div className={styles.editCommentFormActions}>
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={onCancelEditing}
        >
          CANCEL
        </button>
        <button disabled={!isValidComment} className="btn btn-primary btn-lg">
          UPDATE
        </button>
      </div>
    </form>
  );
}

export default EditCommentForm;
