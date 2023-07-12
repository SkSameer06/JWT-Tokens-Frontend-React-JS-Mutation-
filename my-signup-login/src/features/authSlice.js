import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    setAccessToken: (state, action) => {
      state.accesstoken = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refreshtoken = action.payload;
    },

    logout: (state) => {
      delete state.accesstoken;
      delete state.refreshtoken;
    },
  },
});

export default authSlice.reducer;

export const { setAccessToken, setRefreshToken, logout } = authSlice.actions;
