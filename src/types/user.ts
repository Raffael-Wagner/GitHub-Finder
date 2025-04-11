/**
 * Tipo que representa os dados principais de um usuário do GitHub.
 */
export type UserProps = {
  avatar_url: string;
  login: string;
  location: string; //Localização do usuário (pode ser null na API, mas aqui assumimos como string)
  followers: number;
  following: number;
};
