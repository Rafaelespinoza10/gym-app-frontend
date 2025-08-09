import { createSlice } from "@reduxjs/toolkit";
import type { Exercise } from "../interfaces/exercises";
import { getAllExercisesThunk } from "../thunks/exercisesThunk";

interface ExerciseState{
    exercises: Exercise[];
    loading: boolean;
    error: string | null;
}

const initialState: ExerciseState = {
    exercises: [],
    loading: false,
    error: null,
};

const exercisesSlice = createSlice({
    name: "exercises",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder 
        .addCase(getAllExercisesThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllExercisesThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.exercises = action.payload;
        })
        .addCase(getAllExercisesThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = (action.payload as string) ?? action.error.message ?? 'Failed';
        })
    }
});

export default exercisesSlice.reducer;