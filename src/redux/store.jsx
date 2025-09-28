import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/data/authSlice";
import activityReducer from "@/redux/data/activitySlice";
import reportReducer from "@/redux/data/reportSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    activity: activityReducer,
    report: reportReducer,
  },
});
