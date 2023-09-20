import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Cadastro from "./pages/Cadastro";
import CadastroCar from "./pages/CadastroCar";
import Carros from "./pages/Carros";
import VejaMais from "./pages/VejaMais";
import EditaCar from "./pages/EditaCar";

const theme = createTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "#7986cb",
      main: "rgba(3, 3, 3, 1)",
      dark: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(213, 175, 255, 1)",
      main: "rgba(122, 0, 245, 1)",
      dark: "rgba(59, 2, 116, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/edita-car/:id",
    element: <EditaCar />,
  },
  {
    path: "/cadastrar-carro",
    element: <CadastroCar />,
  },
  {
    path: "/exibe-carros",
    element: <Carros />,
  },
  {
    path: "/veja-mais/:id",
    element: <VejaMais />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
