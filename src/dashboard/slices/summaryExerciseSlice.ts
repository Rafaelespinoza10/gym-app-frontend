import { createSlice } from "@reduxjs/toolkit";
import type { ExerciseByDateRange } from "../interfaces/summary";
import { getSummaryByRangeThunk } from "../thunks/summaryExercisesThunk";


interface SummaryExerciseByRangeState{
    summaryExercises: ExerciseByDateRange[];
    loading: boolean;
    error: string | null;
}

const initialState: SummaryExerciseByRangeState = {
    summaryExercises: [],
    loading: false,
    error: null
};

const summaryExerciseSlice = createSlice({
    name: "summaryExercises",
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getSummaryByRangeThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getSummaryByRangeThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.summaryExercises = action.payload;
        })
        .addCase(getSummaryByRangeThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = (action.payload as string) ?? action.error.message ?? 'Failed';
        })
    }
})

export default summaryExerciseSlice.reducer;