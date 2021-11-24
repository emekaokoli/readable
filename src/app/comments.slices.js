import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  get,
  getByParent,
  add,
  vote,
  disableByParent,
  disable,
  edit,
} from '../backend/comments';

export const Get = createAsyncThunk('comments/get', async (id) => {
  const response = await get(id);
  return response;
});

export const GetByParent = createAsyncThunk(
  'comments/getByParent',
  async (id) => {
    const response = await getByParent(id);
    return response;
  },
);

export const Add = createAsyncThunk('comments/add', async (comment) => {
  const response = await add(comment);
  return response;
});

export const Vote = createAsyncThunk('comments/vote', async (id) => {
  const response = await vote(id);
  return response;
});

export const DisableByParent = createAsyncThunk(
  'comments/disableByParent',
  async (id) => {
    const response = await disableByParent(id);
    return response;
  },
);

export const Disable = createAsyncThunk('comments/disable', async (id) => {
  const response = await disable(id);
  return response;
});

export const Edit = createAsyncThunk('comments/edit', async (comment) => {
  const response = await edit(comment);
  return response;
});

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(Get.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Get.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(Get.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(GetByParent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetByParent.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(GetByParent.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(Add.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Add.fulfilled, (state, action) => {
        state.comments = [...state.comments, action.payload];
        state.loading = false;
      })
      .addCase(Add.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(Vote.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Vote.fulfilled, (state, action) => {
        state.comments = state.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return action.payload;
          }
          return comment;
        });
        state.loading = false;
      })
      .addCase(Vote.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(DisableByParent.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DisableByParent.fulfilled, (state, action) => {
        state.comments = state.comments.filter(
          (comment) => comment.parentId !== action.payload,
        );
        state.loading = false;
      })
      .addCase(DisableByParent.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(Disable.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Disable.fulfilled, (state, action) => {
        state.comments = state.comments.filter(
          (comment) => comment.id !== action.payload,
        );
        state.loading = false;
      })
      .addCase(Disable.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      })
      .addCase(Edit.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(Edit.fulfilled, (state, action) => {
        state.comments = state.comments.map((comment) => {
          if (comment.id === action.payload.id) {
            return action.payload;
          }
          return comment;
        });
        state.loading = false;
      })
      .addCase(Edit.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

export const {
  getComments,
  getCommentsByParent,
  addComment,
  voteComment,
  disableCommentsByParent,
  disableComment,
  editComment,
} = commentsSlice.actions;

export const getall = (state) => state.comments.comments;

export default commentsSlice.reducer;
