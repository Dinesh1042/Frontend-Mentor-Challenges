import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import commentsReducer from "./slices/comments";

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
