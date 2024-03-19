import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/globals.css";

// Pages
import App from "./App";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

// Redux
import { Provider } from "react-redux";
import { store } from "./store/root";
import { CityWeather } from "./pages/CityWeather/CityWeather";
import { ThemeProvider } from "@mui/material";
import { theme } from "styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/:cityName" element={<CityWeather />} />
            <Route path="/*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
