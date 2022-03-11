import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// ------------- async functions -------------
// createGoal
export const createGoal = createAsyncThunk(
  "goals/create",
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.createGoal(goalData, token);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.msg ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// ------------- slice -------------
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
