import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Exercise } from "../interfaces/exercises/Exercises.model";
import { getExercises } from "../services";
import { buildException } from "../libs";


export const getAllExercisesThunk = createAsyncThunk<
    Exercise[],
    string | null
>(
    "exercises/getAll",
    async(category, { rejectWithValue}) => {
        try {
            const response = await getExercises( category );
            console.log('response', response.data);
            return response.data;
        } catch (error) {
            const {  message } = buildException(error);
            return rejectWithValue(message);
        }
    }
)   