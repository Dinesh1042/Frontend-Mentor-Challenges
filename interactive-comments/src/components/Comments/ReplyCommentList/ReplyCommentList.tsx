import { motion } from "framer-motion";
import React from "react";

import Comment from "../../../interfaces/comment";
import CommentListItem from "../CommentListItem/CommentListItem";
import styles from "./ReplyCommentList.module.scss";

interface ReplyCommentListProps {
  replyComments: Comment[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.5, delay: 0.5 },
  },
};

function ReplyCommentList({ replyComments }: ReplyCommentListProps) {
  if (replyComments.length === 0) return null;

  return (
    <motion.ul
      className={styles.replyCommentList}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {replyComments.map((comment) => (
        <CommentListItem
          key={comment.id}
          comment={comment}
          replyComments={[]}
        />
      ))}
    </motion.ul>
  );
}

export default ReplyCommentList;
