/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

interface LoadingContextType {
  isLoading: boolean;
  showLoading: (message?: string) => void;
  hideLoading: () => void;
  message?: string;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  showLoading: () => {},
  hideLoading: () => {},
  message: "",
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("Loading...");

  const showLoading = (msg = "Loading...") => {
    setMessage(msg);
    setIsLoading(true);
  };

  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading, message }}>
      {children}
    </LoadingContext.Provider>
  );
};
