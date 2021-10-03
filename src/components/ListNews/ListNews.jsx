import React, { Component } from "react";


import axios from "axios";

export class Listnews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      data: {},
    };
  }

  hola = async (e) => {
    e.preventDefault();

    // const API_KEY = process.env.REACT_APP_API_KEY;
    const query = e.target.elements.query.value;
    console.log(query);
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    console.log(res);
    this.setState({ news: [...res.data.articles, ...this.props.info] });
  };

  handlerResetNews = () => {
    this.setState({
      news: [],
      newNews: {},
    });
  };

  render() {
    return (
      <>
        <div>
          <ul className="flex">
            {this.state.news.map((item, i) => (
              <li key={i}>
                <div className="bucle">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                  <a href="{item.url}">{item.url}</a>
                </div>
              </li>
            ))}
          </ul>
          <div className="containers">
            <form onSubmit={this.hola}>
              <h1>Busca una noticia</h1>
              <input
                className="inputnews"
                type="text"
                name="query"
                placeholder="News"
                autoFocus
                autoComplete="off"
              />
              <button className="btnews">News</button>
            </form>
          </div>
      
          <button className="final" onClick={this.handlerResetNews}>
            Borrar
          </button>
        </div>
        <div></div>
      </>
    );
  }
}

export default Listnews;
