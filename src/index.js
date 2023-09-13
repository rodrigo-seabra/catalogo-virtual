import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './Login';
import Cadastro from './Cadastro';
import {createTheme, ThemeProvider} from '@mui/material'
import CadastroMovie from './CadastroMovie';
import EditaFilme from './EditaFilme';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#BD0B08',
    },
    secondary: {
      main: '#660025',
    },
    success: {
      main: '#12e221',
    },
    error: {
      main: '#FF2A08',
    },
    warning: {
      main: '#FFA400',
    },
    info: {
      main: '#D402BA',
    },
    background: {
      default: '#1e1e1e',
      paper: '#FFFF',
    },
    typography: {
      fontFamily: 'Russo One',
    },
  },
    
})



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/cadastro-movie",
    element: <CadastroMovie/>,
  },
  {
    path: "/edicao/:id",
    element: <EditaFilme/>,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>

);


