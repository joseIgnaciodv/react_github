import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Repositorios from "./pages/Repositorios";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route
          path="/repositorios/:username"
          element={<Repositorios />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
