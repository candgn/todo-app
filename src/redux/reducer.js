import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const jobReducer = createSlice({
  name: "jobs",

  initialState,

  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addJob } = jobReducer.actions;
export const reducer = jobReducer.reducer;
