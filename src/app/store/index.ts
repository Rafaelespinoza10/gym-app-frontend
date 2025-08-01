import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../../dashboard/slices/categoriesSlice.ts';
import authReducer from '../../auth/slices/authSlice.ts';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoriesReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;