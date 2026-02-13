import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Home from "./routes/Home.jsx";
import RecursosServido from "./routes/RecursosServido.jsx";
import ValidaSenha from "./routes/ValidaSenha.jsx";
import CashBack from "./routes/CashBack.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "recursosservido",
        element: <RecursosServido />,
      },
      {
        path: "validasenha",
        element: <ValidaSenha />,
      },
      {
        path: "cashback",
        element: <CashBack />,
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
