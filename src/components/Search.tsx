import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import classes from "./Search.module.css";

/**
 * Propriedades esperadas pelo componente Search.
 *
 * @property loadUser - Função assíncrona que carrega os dados do usuário com base no nome fornecido.
 */
type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

/**
 * Componente de busca de usuário do GitHub.
 *
 * Permite ao usuário digitar um nome e procurar os repositórios ao pressionar "Enter"
 * ou clicando no botão de busca. Utiliza a função `loadUser` para carregar os dados.
 *
 * @param props - Propriedades do componente.
 * @param props.loadUser - Função para buscar o usuário pelo nome.
 */
const Search = ({ loadUser }: SearchProps) => {
  const [userName, setuserName] = useState("");

  /**
   * Encarrega-se com o evento de pressionar tecla.
   * Executa a busca se a tecla pressionada for Enter.
   *
   * @param e - Evento de teclado.
   */
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque um usuário:</h2>
      <p>Conheça os seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Informe o usuário"
          onChange={(e) => setuserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
