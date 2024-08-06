import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('/data.json');
  return response.json();
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    filteredItems: [],
    status: 'idle'
  },
  reducers: {
    filterByRange: (state, action) => {
      const [min, max] = action.payload;
      state.filteredItems = state.items.filter(item => item.id >= min && item.id <= max);
    },
    search: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.filteredItems = state.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm) || item.details.toLowerCase().includes(searchTerm)
      );
    },
    resetFilteredItems: (state) => {
      state.filteredItems = state.items;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.filteredItems = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const { filterByRange, search, resetFilteredItems } = dataSlice.actions;

export default dataSlice.reducer;
