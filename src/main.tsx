import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import Home from "./routes/Home.tsx";

/**
 * Define as rotas da aplicação usando React Router.
 *
 * A rota raiz (`/`) renderiza o componente `App`, que por sua vez
 * exibe a página `Home` dentro do `<Outlet />`.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

/**
 * Renderiza a aplicação React dentro da div #root.
 * Usa `StrictMode` para identificar problemas potenciais.
 * O `RouterProvider` injeta o roteador definido acima.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
