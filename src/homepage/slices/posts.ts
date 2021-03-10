import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncState } from "../../store";
import { PostModel } from "../types";

const postsSlice = createSlice({
  name: "posts",
  initialState: { data: [] } as AsyncState<PostModel[]>,
  reducers: {
    postRequest: (state) => {
      state.loading = true;
    },
    postSuccess: (state, { payload }: PayloadAction<PostModel[]>) => {
      state.loading = false;
      state.success = true;
      state.data = payload;
      state.error = null;
    },
    postError: (state, { payload }: PayloadAction<any>) => {
      state.success = false;
      state.loading = false;
      state.data = [];
      state.error = payload;
    },
  },
});

export default postsSlice.reducer;
export const { postError, postRequest, postSuccess } = postsSlice.actions;
