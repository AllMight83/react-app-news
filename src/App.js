import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import '../src/styles/styles.scss'
import {userContext} from './context/UserContext';




import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

// function App() {
   
//     return  (
//       <div>

     
// <BrowserRouter>
//       <Header />
//       <Main />

// </BrowserRouter>

//       <Footer />

//       </div>

//     )
  
// }

// export default App;

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user: {
         name: ''
       },
       news: {
         title: ''
         
       }
    }
  }
  
  login = (name) => {
    this.setState({user: {name}})
  }
  
  logout = () => {
    this.setState({user: {name: ""}})
  }




  
    render() {
  
      const value = {
        user: this.state.user,
        login: this.login,
        logout: this.logout
      }

      const noticias = {
        title: this.state.news
        // description: this.state.news.description
      }
  
      return (
        <div>
  <BrowserRouter>
        <userContext.Provider value={value}>
      
  
        <Header />
        <Main />
  
      
        </userContext.Provider>
        </BrowserRouter>
        <Footer />
      </div>
      )
    }
  }
  
  export default App