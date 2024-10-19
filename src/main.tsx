import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import { AuthProvider } from "./context/AuthProvider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
