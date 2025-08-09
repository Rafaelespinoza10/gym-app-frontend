import { createSlice } from "@reduxjs/toolkit";
import type { TopTenExercisesData } from "../interfaces/summary/TopTenExercises.model";
import { topTenExercisesThunk } from "../thunks";


interface TopTenExercisesState{
    listExercises: TopTenExercisesData[];
    loading: boolean;
    error: string | null;
}

const initialState : TopTenExercisesState = {
    listExercises: [],
    loading: false,
    error: null,
}


const topTenExercisesSlice = createSlice({
    name: "topExercises",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(topTenExercisesThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(topTenExercisesThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.listExercises = action.payload;
        })
        .addCase(topTenExercisesThunk.rejected, (state, action ) => {
            state.loading = false;
            state.error = (action.payload as string) ?? action.error.message ?? 'Failed';
        })
    }
})

export default topTenExercisesSlice.reducer;