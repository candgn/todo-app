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
    updateJob: (state, action) => {
      return state.map((job) => {
        if (job.id === action.payload.id) {
          return {
            ...job,
            priority: action.payload.priority,
          };
        }
        return job;
      });
    },
    removeJob: (state, action) => {
      return state.filter((job) => job.id !== action.payload.id);
    },
  },
});

export const { addJob, updateJob, removeJob } = jobReducer.actions;
export const reducer = jobReducer.reducer;
