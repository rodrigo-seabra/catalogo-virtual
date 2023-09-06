import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from './Login';
import Cadastro from './Cadastro';
import {createTheme, ThemeProvider} from '@mui/material'


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
      paper: '#0a0a0a',
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
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>

);


