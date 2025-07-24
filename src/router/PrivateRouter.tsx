import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../auth/store";


interface PropsPrivateRouter  {
    children: ReactNode;
}

export const PrivateRouter = ({ children }: PropsPrivateRouter) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return isAuthenticated ? <>{children}</> : <Navigate to="/auth/login"  replace/>
}