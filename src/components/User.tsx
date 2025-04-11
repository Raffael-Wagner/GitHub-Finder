import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import classes from "./User.module.css";

/**
 * Componente que mostra as informações do usuário do GitHub.
 *
 * Mostra avatar, login, localização (se houver), número de seguidores e seguidos,
 * e um link para visualizar os repositórios do usuário.
 *
 * @param props - Propriedades do usuário.
 * @param props.login - Nome de usuário (login) no GitHub.
 * @param props.avatar_url - URL do avatar do usuário.
 * @param props.followers - Número de seguidores.
 * @param props.following - Número de pessoas que o usuário segue.
 * @param props.location - Localização do usuário (opcional).
 */
const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      {location && (
        <p className={classes.location}>
          <MdLocationPin />
          <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>Seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <a
        href={`https://github.com/${login}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar repositórios
      </a>
    </div>
  );
};
export default User;
