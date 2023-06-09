import React from "react";
import ReactDOM from "react-dom/client";
/** Stytes */
import "./index.css";
/** Local Modules */
import reportWebVitals from "reportWebVitals";
import App from "./App";

reportWebVitals();

const { createRoot } = ReactDOM;

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);