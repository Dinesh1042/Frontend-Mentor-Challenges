import React from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getCurrentUser } from "../../../app/slices/auth";
import { commentDisliked, commentLiked } from "../../../app/slices/comments";
import classNames from "../../../helpers/classNames";
import Comment from "../../../interfaces/comment";
import MinusIcon from "../../Icons/Minus";
import PlusIcon from "../../Icons/Plus";
import AnimateNumber from "../../UI/AnimateNumber/AnimateNumber/AnimateNumber";
import styles from "./CommentScore.module.scss";

interface CommentScoreProps {
  comment: Comment;
  className?: string;
}

function CommentScore({ comment, className }: CommentScoreProps) {
  const currentUser = useAppSelector(getCurrentUser);
  const dispatch = useAppDispatch();

  const score = comment.likes.length - comment.dislikes.length;
  const isLiked = comment.likes.includes(currentUser.uid);
  const isDisliked = comment.dislikes.includes(currentUser.uid);

  const handleLike = () => {
    dispatch(commentLiked({ id: comment.id, user: currentUser }));
  };

  const handleDislike = () => {
    dispatch(commentDisliked({ id: comment.id, user: currentUser }));
  };

  return (
    <div className={classNames(styles.commentScore, className)}>
      <button
        className={classNames(styles.commentScoreButton, {
          [styles.highlight]: isLiked,
        })}
        onClick={handleLike}
      >
        <PlusIcon />
      </button>
      <div className={styles.commentScoreCount}>
        <AnimateNumber number={score} />
      </div>
      <button
        className={classNames(styles.commentScoreButton, {
          [styles.highlight]: isDisliked,
        })}
        onClick={handleDislike}
      >
        <MinusIcon />
      </button>
    </div>
  );
}

export default CommentScore;
