import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from '../../dashboard/slices/categoriesSlice.ts';
import authReducer from '../../auth/slices/authSlice.ts';
import exercisesReducer from '../../dashboard/slices/exercisesSlice.ts';
import topExercisesReducer from '../../dashboard/slices/topTenExercisesSlice.ts';
import summaryExercisesReducer from '../../dashboard/slices/summaryExerciseSlice.ts';
import { authRedirectMiddleware } from "../middleware/authRedirectMiddleware.ts";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoriesReducer,
        exercises: exercisesReducer,
        topExercises: topExercisesReducer,
        summaryExercises: summaryExercisesReducer,
    },
    middleware: (getDefault) => getDefault().concat(authRedirectMiddleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;