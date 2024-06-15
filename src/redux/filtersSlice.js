import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    setSearch: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setSearch } = filtersSlice.actions;
export const selectNameFilter = state => state.filters.name;
export default filtersSlice.reducer;