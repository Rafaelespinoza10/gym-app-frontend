import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../auth/store";
import type { ReactNode } from "react";

interface PropsPublicRouter  {
    children: ReactNode;
}


export const PublicRouter = ({ children }: PropsPublicRouter) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return isAuthenticated ? <Navigate to="/dashboard/summary" replace /> : <>{children}</>
}
