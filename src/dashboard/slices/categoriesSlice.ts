import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesThunks } from '../thunks';
import type { MuscleProps } from '../interfaces/categories';

interface CategoriesState{
    categories: MuscleProps[];
    loading: boolean;
    error: string | null;
}

const initialState : CategoriesState = {
    categories: [],
    loading: false,
    error: null
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getCategoriesThunks.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        .addCase(getCategoriesThunks.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        })
        .addCase(getCategoriesThunks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export default categoriesSlice.reducer; 