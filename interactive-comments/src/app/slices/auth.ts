import { createSlice } from "@reduxjs/toolkit";

import user from "../../data/currentUser.json";
import User from "../../interfaces/user";
import { RootState } from "../store";

const currentUser = user as User;

const authSlice = createSlice({
  name: "auth",
  initialState: { currentUser },
  reducers: {},
});

export const getCurrentUser = (state: RootState) => state.auth.currentUser;

export default authSlice.reducer;
