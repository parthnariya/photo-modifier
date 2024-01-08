import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeMode, ThemeProviders } from "./styles/themeContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeMode>
        <ThemeProviders>
          <App />
        </ThemeProviders>
      </ThemeMode>
    </Provider>
  </React.StrictMode>
);
