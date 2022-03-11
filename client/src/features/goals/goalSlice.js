import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// createGoal
export const createGoal = () => {};

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    //   not persist
    reset: (state) => initialState,
  },
  extraReducers: {},
});

export const { reset } = goalSlice.actions;

export default goalSlice.reducer;
