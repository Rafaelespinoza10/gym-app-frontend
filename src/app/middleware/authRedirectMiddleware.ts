import { isRejectedWithValue, type Middleware, type AnyAction } from "@reduxjs/toolkit";
import { logout } from "../../auth/slices";

function getStatusFromRejectedAction(action: AnyAction): number | undefined {
  const p = action.payload;

  // Caso: rejectWithValue({ status, message })
  if (p && typeof p === "object" && "status" in p) {
    const s = (p as { status?: unknown }).status;
    return typeof s === "number" ? s : undefined;
  }

  // Caso: rejectWithValue("Unauthorized") o similar
  if (typeof p === "string" && /unauthor/i.test(p)) {
    return 401;
  }

  // Caso: throw new Error("401 Unauthorized") u otros
  const msg = action.error?.message;
  if (typeof msg === "string" && /401/.test(msg)) {
    return 401;
  }

  return undefined;
}

export const authRedirectMiddleware: Middleware =
  store => next => action => {
    if (isRejectedWithValue(action)) {
      const status = getStatusFromRejectedAction(action);
      if (status === 401) {
        store.dispatch(logout());
        localStorage.removeItem("token");
        // En SPA es válido; si usas router, puedes disparar una acción y navegar desde un listener
        window.location.replace("/auth/login");
        return; // corta la cadena
      }
    }
    return next(action);
  };
