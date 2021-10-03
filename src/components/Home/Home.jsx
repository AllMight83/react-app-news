import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { userContext } from "../../context/UserContext";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: null };

    this.name = React.createRef();
  }

  handleChange = (event) => {
    console.log(event.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ redirect: "/form" });

    //const name = e.target.value
    console.log(this.state);
    console.log(this.name.current.value);
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <>
        <div className="container">
          <h1>Introduce usuario</h1>
          <br />
          <form onSubmit={this.handleSubmit}>
            <label></label>
            <input
              className="nombre"
              type="text"
              onChange={this.handleChange}
              ref={this.name}
              placeholder="Escribe tu nombre..."
              autoFocus
            />
            <br />

            <userContext.Consumer>
              {({ user, login }) => (
                <input
                  className="boton2"
                  type="submit"
                  value="Enviar"
                  onClick={() => login(this.name.current.value)}
                />
              )}
            </userContext.Consumer>
          </form>
        </div>
      </>
    );
  }
}

export default Home;
