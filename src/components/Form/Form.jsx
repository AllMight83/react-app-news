import React, { Component } from "react";


class Form extends Component {
  
  constructor (props){
    super(props)

    this.state = {
      news: [], 
      data: {},
  }

 
}
  addProduct = (e) => {
    e.preventDefault()

    const title = e.target.elements.title.value
    console.log(title);
    const description = e.target.elements.description.value
    console.log(description);
    const url = e.target.elements.url.value

    const noticia = {title, description, url}
    this.setState({data: noticia})

    //Añadir producto al array
    const nuevaNoticia = noticia

    this.props.obj(noticia)     
}


handleChange = (event) => {
    console.log(event.target.value);
  
}


  render() {

 
    return (
        <>
        <div className="container">
        <h1 className="titlenew">Crea tu noticia</h1>
        <br />
      <form className="product-list-form" onSubmit={this.addProduct}>
      
      <label className="label">
      Título
      <br /><br /><br />
      </label>
      <input className="nombres one" type="text" name="title" onChange={this.handleChange} placeholder="titulo" autoFocus/>
      <br /><br />
      <label className="label2">
      Descripción
      <br /><br /><br />
      </label> 
      <textarea className="nombres two" type="text" name="description" onChange={this.handleChange} placeholder="descripcion" cols="22" rows="8"></textarea>
      <br /><br />
      <label className="label3">
      url
      <br /><br /><br />
      </label>
      <input className="nombres three" type="url" name="url" onChange={this.handleChange} placeholder="url"/>
      <br />   
      <input type="submit" value="Crear"  className="btnn"/>
  </form>
  </div>

 {/* <p>Título: {this.state.data.title}</p> 
  <p>Descripción: {this.state.data.description}</p> */}
  
  </>
    )
  }
}

export default Form;
