import { createSlice } from "@reduxjs/toolkit";
import { trackActivity } from "../api/trackActivity";

const activitySlice = createSlice({
  name: "activity",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(trackActivity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(trackActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(trackActivity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default activitySlice.reducer;
