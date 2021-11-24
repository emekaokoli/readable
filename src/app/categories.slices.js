import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll } from '../backend/categories';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await getAll();
    return response.data;
  },
);

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  },
});

export const getCategories = (state) => state.categories.categories;

export const { actions } = categoriesSlice;

export default categoriesSlice.reducer;
