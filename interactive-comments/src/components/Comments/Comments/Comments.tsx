import React, { useEffect } from "react";

import { useAppSelector } from "../../../app/hooks";
import { getComments } from "../../../app/slices/comments";
import { INTERATIVE_COMMENT_LOCAL } from "../../../config";
import AddComment from "../AddComment/AddComment";
import CommentList from "../CommentList/CommentList";

function Comments() {
  const comments = useAppSelector(getComments);

  useEffect(() => {
    localStorage.setItem(INTERATIVE_COMMENT_LOCAL, JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="comments">
      <CommentList comments={comments} />
      <AddComment />
    </div>
  );
}

export default Comments;
