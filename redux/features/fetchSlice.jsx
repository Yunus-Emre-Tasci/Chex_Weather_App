import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  error: false,
};


const fetchSlice = createSlice({
  name: "Chex",
  initialState,
  reducers: {
    fetchError: (state) => {
      state.error = true;
    }
  },
});

export const { fetchError } = fetchSlice.actions;

export default fetchSlice.reducer;
