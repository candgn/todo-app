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
  },
});

export const { addJob, updateJob } = jobReducer.actions;
export const reducer = jobReducer.reducer;
