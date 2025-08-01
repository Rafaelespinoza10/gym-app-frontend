import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import "./index.css";
import App from "./App.tsx";
import { LoadingProvider } from "./app/context/LoadingContext.tsx";
import { store } from "./app/store/index.ts";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LoadingProvider>
          <App />
        </LoadingProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
