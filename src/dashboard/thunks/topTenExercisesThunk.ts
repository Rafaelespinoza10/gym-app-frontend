import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTopTenExercises } from "../services";
import { buildException } from "../libs";

export const topTenExercisesThunk = createAsyncThunk(
  "topExercises/fetch",
  async (_, {rejectWithValue}) => {
    try {
      const response = await getTopTenExercises();
      return response.data;
    } catch (error) {
      const {  message } = buildException(error);
      return rejectWithValue(message);
    }
  }
);
