import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ExerciseByDateRange } from "../interfaces/summary";
import { getSummaryGraphics } from "../services";
import { buildException } from "../libs";

export const getSummaryByRangeThunk = createAsyncThunk<
  ExerciseByDateRange[],
  { startDate: string; endDate: string }
>("summary/getAll", async ({ startDate, endDate }, { rejectWithValue }) => {
  try {
    console.log("startDate, endDate", { startDate, endDate });
    const response = await getSummaryGraphics(startDate, endDate);
    console.log("[THUNK] fetch ok", response);
    return response.data;
  } catch (error) {
    const {  message } = buildException(error);
    return rejectWithValue(message);
  }
});
