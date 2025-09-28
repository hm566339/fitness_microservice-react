import { createAsyncThunk } from "@reduxjs/toolkit";

export const trackActivity = createAsyncThunk(
  "activity/trackActivity",
  async (payload, { rejectWithValue }) => {
    // console.log(payload);
    try {
      // 🔑 LocalStorage se token lo
      const token = localStorage.getItem("token");
      // console.log("Token from localStorage:", token);

      const response = await fetch(
        "http://localhost:8080/api/activities/track",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to track activity");
      }

      const data = await response.json();
      // console.log("API Response:", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
