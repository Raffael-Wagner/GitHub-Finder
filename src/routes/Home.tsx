import { UserProps } from "../types/user";
import Search from "../components/Search";
import { useState } from "react";
import User from "../components/User";
import Error from "../components/Error";

/**
 * Página principal da nossa aplicação.
 *
 * Contém a lógica de busca de usuários no GitHub, exibe o componente de busca
 * (`Search`), e renderiza o componente do usuário (`User`) ou uma mensagem de erro
 * (`Error`) dependendo da resposta da API.
 */
const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  /**
   * Função responsável por buscar os dados do usuário na API do GitHub.
   *
   * @param userName - Nome do usuário que deseja buscar.
   */
  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    // Se o usuário não for encontrado
    if (res.status === 404) {
      setError(true);
      return;
    }

    // Extrai apenas os campos desejados/necessários da resposta da API
    const { avatar_url, login, location, followers, following } = data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };
    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
