import React, { Component } from "react";
import {Route, Switch} from 'react-router-dom';

import ListNews from '../ListNews';
import Home from "../Home";
import Form from "../Form";
import Error from "../Error";

class Main extends Component {

  constructor (props){
    super(props)

  this.state = {
    info: []
  }

}

handleChangeStateNews = (obj)=>{
  this.setState({ info: [...this.state.info, obj]})
  console.log(obj, 'Objeto')
} 

  render() {
    return (
      <main>
            <Switch>
                <Route path="/" component={Home} exact /> 
                <Route path="/form" component={()=> <Form  obj={this.handleChangeStateNews}/>} />
                <Route path="/list" component={()=> <ListNews info={this.state.info}/>} />
                <Route component={Error} />
            </Switch>
      </main>
    )
  }
}

export default Main;
