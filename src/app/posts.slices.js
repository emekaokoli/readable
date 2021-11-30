import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  incrementCommentCounter,
} from '../backend/posts';

export const getall = createAsyncThunk(
  'posts/getall',

  async (category, { rejectWithValue }) => {
    try {
      const posts = await getAll(category);

      return posts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetOnepost = createAsyncThunk(
  'post/get',
  async (id, { rejectWithValue }) => {
    try {
      const post = await get(id);
      return post;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const GetpostsByCategory = createAsyncThunk(
  'post/getByCategory',
  async (category, { rejectWithValue }) => {
    try {
      const posts = await getByCategory(category);
      return posts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const Addposts = createAsyncThunk(
  'post/add',
  async (post, { rejectWithValue }) => {
    try {
      const newPost = await add(post);
      return newPost;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const Voteposts = createAsyncThunk(
  'post/vote',
  async (id, { rejectWithValue }) => {
    try {
      const post = await vote(id);
      return post;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const Disableposts = createAsyncThunk(
  'post/disable',
  async (id, { rejectWithValue }) => {
    try {
      const post = await disable(id);
      return post;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const Editposts = createAsyncThunk(
  'post/edit',
  async (post, { rejectWithValue }) => {
    try {
      const newPost = await edit(post);
      return newPost;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const IncrementCommentCounter = createAsyncThunk(
  'post/incrementCommentCounter',
  async (id, { rejectWithValue }) => {
    try {
      const post = await incrementCommentCounter(id);
      return post;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// Create the slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    // The reducer for the async thunk
    builder
      .addCase(getall.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getall.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getall.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(GetOnepost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetOnepost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        });
        state.loading = false;
      })
      .addCase(GetOnepost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(GetpostsByCategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetpostsByCategory.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(GetpostsByCategory.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(Addposts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Addposts.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload];
        state.loading = false;
      })
      .addCase(Addposts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(Voteposts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Voteposts.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        });
        state.loading = false;
      })
      .addCase(Voteposts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(Disableposts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Disableposts.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        });
        state.loading = false;
      })
      .addCase(Disableposts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(Editposts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Editposts.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        });
        state.loading = false;
      })
      .addCase(Editposts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(IncrementCommentCounter.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(IncrementCommentCounter.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) => {
          if (post.id === action.payload) {
            console.log('action.payload');
            console.log(action.payload);
            return action.payload;
          }
          return post;
        });
        state.loading = false;
      })
      .addCase(IncrementCommentCounter.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const getPosts = (state) =>
  [...state.posts.posts].sort((a, b) => b.timestame - a.timestame);

export const { actions } = postsSlice;
export default postsSlice.reducer;
