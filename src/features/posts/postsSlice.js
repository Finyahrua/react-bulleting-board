import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "posts init",
    content: "lorem ips  sndk",
  },
  {
    id: 2,
    title: "posts the second",
    content: "lorem ips  sndk",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});
export const selectAllPosts = (state) => state.posts;
export const { addPost } = postsSlice.actions;
const postsReducer = postsSlice.reducer;
export default postsReducer;
