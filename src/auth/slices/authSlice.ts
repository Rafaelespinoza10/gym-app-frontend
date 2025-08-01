import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AuthState } from '../models';


const initialState: AuthState = {
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token')
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<string>) => {
        state.token = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem('token', action.payload);
      },
      logout: (state) => {
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem('token');
      },
    },
  });
  
export const { login, logout} = authSlice.actions;
export default authSlice.reducer;

