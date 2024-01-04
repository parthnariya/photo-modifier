import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeMode, ThemeProviders } from "./styles/themeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeMode>
      <ThemeProviders>
        <App />
      </ThemeProviders>
    </ThemeMode>
  </React.StrictMode>
);
