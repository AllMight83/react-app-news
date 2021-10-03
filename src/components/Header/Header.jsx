import React from "react";
import { userContext } from "../../context/UserContext";
import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header--h1">My NewsApp</h1>

     
        <userContext.Consumer>
          {({ user }) => (
            <div className="h3">
              {user.name ? `Hola, ${user.name}!` : <p className="saludo">Bienvenido</p>}
            </div>
          )}
        </userContext.Consumer>

        <userContext.Consumer>
          {({ user, login, logout }) => (
            <div className="boton">
              {user.name ? (
                <button
                  className="btn btn-primary s-1"
                  onClick={() => logout()}
                >
                  Cerrar Sesión
                </button>
              ) : (
                ""
              )}
            </div>
          )}
        </userContext.Consumer>
      

      <Nav />
    </header>
  );
};

export default Header;
