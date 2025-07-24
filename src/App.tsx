import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthLayout } from "./auth/layout/AuthLayout";
import { DashboardLayout } from "./dashboard/layout/DashboardLayout";
import { ToastContainer } from "react-toastify";
import {
  ExercisesRegisterPage,
  LoginPage,
  PrivateRouter,
  ProgressRegisterPage,
  PublicRouter,
  RegisterPage,
  SummaryPage,
} from "./router";
import { Suspense } from "react";
import { LoadingOverlay } from "./shared/components/ui/LoadingCircular";
import { Page404NotFound } from "./shared/pages/NotFoundPage";

function App() {
  return (
    <>
      {/* Rutas públicas */}
      <Suspense fallback={<LoadingOverlay message="Loading..." />} >
        <Routes>
          <Route path="auth" element={<AuthLayout />}>
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

          {/* Rutas privadas */}
          <Route
            path="dashboard"
            element={
              <PrivateRouter>
                <DashboardLayout />
              </PrivateRouter>
            }
          >
            <Route path="summary" element={<SummaryPage />} />
            <Route
              path="register-exercises"
              element={<ExercisesRegisterPage />}
            />
            <Route
              path="register-progress"
              element={<ProgressRegisterPage />}
            />
          </Route>

          <Route path="*" element={<Page404NotFound />} />
        </Routes>
      </Suspense>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
