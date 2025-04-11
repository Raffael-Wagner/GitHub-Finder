import { Outlet } from "react-router-dom";
import classes from "./App.module.css";

/**
 * Componente principal da aplicação.
 *
 * Renderiza o título da aplicação e o conteúdo das rotas definidas pelo React Router
 * por meio do componente `<Outlet />`.
 */
function App() {
  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Outlet />
    </div>
  );
}

export default App;
