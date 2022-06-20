import { motion } from "framer-motion";
import React, { useState } from "react";

import Comment from "../../../interfaces/comment";
import AddComment from "../AddComment/AddComment";
import CommentCard from "../CommentCard/CommentCard";
import ReplyCommentList from "../ReplyCommentList/ReplyCommentList";
import styles from "./CommentListItem.module.scss";

interface CommentListItemProps {
  comment: Comment;
  replyComments: Comment[];
}

const item = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0 },
};

function CommentListItem({
  comment,
  replyComments = [],
}: CommentListItemProps) {
  const [isReplying, setIsReplying] = useState(false);

  const onReply = () => {
    setIsReplying(true);
  };

  const onExitReply = () => {
    setIsReplying(false);
  };

  return (
    <motion.li className={styles.commentListItem} variants={item}>
      <CommentCard comment={comment} onReply={onReply} />
      {isReplying && (
        <AddComment
          comment={comment}
          isReplying={isReplying}
          onExitReply={onExitReply}
        />
      )}
      <ReplyCommentList replyComments={replyComments} />
    </motion.li>
  );
}

export default CommentListItem;
