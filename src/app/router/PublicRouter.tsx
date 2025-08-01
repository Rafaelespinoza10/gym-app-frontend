import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAppSelector } from "../hooks";

interface PropsPublicRouter  {
    children: ReactNode;
}


export const PublicRouter = ({ children }: PropsPublicRouter) => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    return isAuthenticated ? <Navigate to="/dashboard/summary" replace /> : <>{children}</>
}
