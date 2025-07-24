// src/router/lazyPages.ts
import { lazy } from 'react';

// Public pages
export const LoginPage = lazy(() => import('../auth/pages/LoginPage'));
export const RegisterPage = lazy(() => import('../auth/pages/RegisterPage'));

// Private pages
export const SummaryPage = lazy(() => import('../dashboard/pages/SummaryPage'));
export const ExercisesRegisterPage = lazy(() => import('../dashboard/pages/ExercisesRegisterPage'));
export const ProgressRegisterPage = lazy(() => import('../dashboard/pages/ProgressRegisterPage'));
