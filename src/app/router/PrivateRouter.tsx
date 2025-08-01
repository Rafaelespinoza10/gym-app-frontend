import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

interface PropsPrivateRouter  {
    children: ReactNode;
}

export const PrivateRouter = ({ children }: PropsPrivateRouter) => {
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login"  replace/>
}