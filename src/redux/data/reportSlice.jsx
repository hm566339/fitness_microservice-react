import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reportApi } from "../api/reportApi";

export const fetchReport = createAsyncThunk(
  "report/fetchReport",
  async (_, { rejectWithValue }) => {
    try {
      const data = await reportApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reportSlice = createSlice({
  name: "report",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReport.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default reportSlice.reducer;
