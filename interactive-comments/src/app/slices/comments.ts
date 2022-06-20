import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { INTERATIVE_COMMENT_LOCAL } from "../../config";
import comments from "../../data/comments.json";
import Comment from "../../interfaces/comment";
import User from "../../interfaces/user";
import { RootState } from "../store";

const getLocalComments = () => {
  return (JSON.parse(
    localStorage.getItem(INTERATIVE_COMMENT_LOCAL) || "null"
  ) || comments) as Comment[];
};

const initialComments = getLocalComments();

interface AddComment {
  content: string;
  user: User;
  parentId?: string | null;
  replyTo?: string | null;
}

interface RemoveComment {
  id: string;
}

interface LikeComment {
  id: string;
  user: User;
}

interface UpdateComment {
  id: string;
  content: string;
}

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialComments,
  reducers: {
    commentAdded: {
      reducer(comments, { payload }: PayloadAction<Comment>) {
        comments.push(payload);
      },
      prepare(payload: AddComment) {
        const { content, parentId, replyTo, user } = payload;
        return {
          payload: {
            id: uuid(),
            createdAt: Date.now(),
            isEdited: false,
            likes: [],
            dislikes: [],
            content,
            parentId: parentId || null,
            replyTo: replyTo || null,
            user,
          },
        };
      },
    },
    commentRemoved(comments, { payload }: PayloadAction<RemoveComment>) {
      return comments.filter(({ id }) => id !== payload.id);
    },
    commentUpdated(comments, { payload }: PayloadAction<UpdateComment>) {
      const currentComment = comments.find(({ id }) => payload.id === id);
      if (currentComment) {
        currentComment.content = payload.content;
        currentComment.isEdited = true;
      }
    },
    commentLiked(comments, { payload }: PayloadAction<LikeComment>) {
      const {
        id: currentCommentId,
        user: { uid },
      } = payload;

      const currentComment = comments.find(({ id }) => id === currentCommentId);

      if (!currentComment) return comments;

      const isLiked = currentComment.likes.includes(uid);
      const isDisliked = currentComment.dislikes.includes(uid);

      if (!isLiked && !isDisliked) currentComment.likes.push(uid);
      else if (isLiked)
        currentComment.likes = currentComment.likes.filter(
          (userId) => userId !== uid
        );
      else if (isDisliked) {
        currentComment.dislikes = currentComment.dislikes.filter(
          (userId) => userId !== uid
        );
        currentComment.likes.push(uid);
      }
    },
    commentDisliked(comments, { payload }: PayloadAction<LikeComment>) {
      const {
        id: currentCommentId,
        user: { uid },
      } = payload;

      const currentComment = comments.find(({ id }) => id === currentCommentId);

      if (!currentComment) return comments;

      const isLiked = currentComment.likes.includes(uid);
      const isDisliked = currentComment.dislikes.includes(uid);

      if (!isLiked && !isDisliked) currentComment.dislikes.push(uid);
      else if (isDisliked)
        currentComment.dislikes = currentComment.dislikes.filter(
          (userId) => userId !== uid
        );
      else if (isLiked) {
        currentComment.likes = currentComment.likes.filter(
          (userId) => userId !== uid
        );
        currentComment.dislikes.push(uid);
      }
    },
  },
});

export const getComments = (state: RootState) => state.comments;

export const {
  commentAdded,
  commentRemoved,
  commentUpdated,
  commentLiked,
  commentDisliked,
} = commentsSlice.actions;
export default commentsSlice.reducer;
