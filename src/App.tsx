import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthLayout } from "./auth/layout/AuthLayout";
import { DashboardLayout } from "./dashboard/layout/DashboardLayout";
import { ToastContainer } from "react-toastify";
import {
  LoginPage,
  PrivateRouter,
  ProgressRegisterPage,
  PublicRouter,
  RegisterPage,
  SummaryPage,
} from "./app/router";
import { Suspense } from "react";
import { LoadingOverlay } from "./shared/components/ui/LoadingCircular";
import { Page404NotFound } from "./shared/pages/NotFoundPage";
import MetricsPage from "./dashboard/pages/MetricsPage";
function App() {
  return (
    <>
      <Suspense fallback={<LoadingOverlay message="Loading..." />} >
        <Routes>
          {/* Landing: manda / → /auth/login (o a /dashboard/summary si ya hay sesión) */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />

          {/* Auth */}
          <Route path="auth" element={<AuthLayout />}>
            {/* /auth → /auth/login */}
            <Route index element={<Navigate to="login" replace />} />
            <Route
              path="login"
              element={
                <PublicRouter>
                  <LoginPage />
                </PublicRouter>
              }
            />
            <Route
              path="register"
              element={
                <PublicRouter>
                  <RegisterPage />
                </PublicRouter>
              }
            />
          </Route>

          {/* Dashboard */}
          <Route
            path="dashboard"
            element={
              <PrivateRouter>
                <DashboardLayout />
              </PrivateRouter>
            }
          >
            {/* /dashboard → /dashboard/summary */}
            <Route index element={<Navigate to="summary" replace />} />
            <Route path="summary" element={<SummaryPage />} />
            <Route path="metrics" element={<MetricsPage />} />
            <Route path="register-progress" element={<ProgressRegisterPage />} />
          </Route>

          {/* 404 de la app */}
          <Route path="*" element={<Page404NotFound />} />
        </Routes>
      </Suspense>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
