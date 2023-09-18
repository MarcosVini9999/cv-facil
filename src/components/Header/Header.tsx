import React from "react";
import { Link } from "react-router-dom";

import fileTextRed from "@/assets/icons/fileTextRed.svg";
import { AppRoutes } from "@/config/routes";
import { UserContext } from "@/contexts/user";
import login from "@/assets/icons/login.svg";
import logout from "@/assets/icons/logout.svg";
import "./styles.module.scss";

interface HeaderProps {
  className?: string;
  button?: React.ReactNode;
}

export function Header({ className, button }: HeaderProps) {
  const { user } = React.useContext(UserContext);

  return (
    <header class-name={`${className}`}>
      <div>
        <div>
          <img class-name="logo" src={fileTextRed} alt="Arquivo de texto vermelho" />
          <h1>CV Fácil</h1>
        </div>
        <nav>
          <Link to={AppRoutes.home}>Início</Link>
        </nav>
      </div>
      <div>
        {button}
        {user?.avatar ?
          <div>
            <img class-name="avatar" src="https://avatars.githubusercontent.com/u/73958393?v=4" alt="Avatar de usuário" />
            <img class-name="logout" src={logout} alt="Ícone de logout" />
          </div> :
          <img class-name="login" src={login} alt="Ícone de login" />
        }
      </div>
    </header>
  );
}
