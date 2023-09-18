import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Style from "./global.css";

import { createTheme, ThemeProvider } from "@mui/material";
import Cadastro from "./pages/Cadastro";
import CadastroCar from "./pages/CadastroCar";
import Carros from "./pages/Carros";
import VejaMais from "./pages/VejaMais";
import Carrousel from "./components/Carrousel";

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
    path: "/cadastrar-carro",
    element: <CadastroCar />,
  },
  {
    path: "/exibe-carros",
    element: <Carros />,
  },
  {
    path: "/veja-mais",
    element: <VejaMais />,
  },
  {
    path: "/teste",
    element: <Carrousel />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
