import { configureStore } from "@reduxjs/toolkit";
import countersSlice from "../features/counters/countersSlice";
import postsSlice from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counters: countersSlice,
    posts: postsSlice,
  },
});

export default store;
