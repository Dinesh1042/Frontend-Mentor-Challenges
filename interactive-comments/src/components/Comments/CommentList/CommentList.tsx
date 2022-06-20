import { motion } from "framer-motion";
import React from "react";

import Comment from "../../../interfaces/comment";
import CommentListItem from "../CommentListItem/CommentListItem";
import styles from "./CommentList.module.scss";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.5 },
  },
};

interface CommentListProps {
  comments: Comment[];
}

function CommentList({ comments }: CommentListProps) {
  const parentComments = comments.filter(
    (comment) => comment.parentId === null
  );

  const getReplyComments = (parentCommentId: string) => {
    return comments.filter((comment) => comment.parentId === parentCommentId);
  };

  return (
    <motion.ul
      className={styles.commentList}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {parentComments.map((comment) => (
        <CommentListItem
          key={comment.id}
          comment={comment}
          replyComments={getReplyComments(comment.id)}
        />
      ))}
    </motion.ul>
  );
}

export default CommentList;
