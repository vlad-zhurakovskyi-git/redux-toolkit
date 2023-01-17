import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from "./postsAPI";

const initialState = {
    posts: [],
    likes: 0
};

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetchPosts();
    return response.data;
  }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        increment: (state) => {
            state.likes += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPostsAsync.fulfilled, (state, action) => {
          state.posts = action.payload;
        });
    },
});

export const posts = (state) => state.posts.posts;
export const likes = (state) => state.posts.likes;

// for actions
export const { increment } = postsSlice.actions;

export default postsSlice.reducer;
