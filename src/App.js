import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css'
import Articles from './Components/Articles'
import Article from './Components/Article'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Navbar from './Components/Navbar'
import NewArticle from './Components/NewArticle'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <Route path={`/`} component={Navbar} />
          {/* Home */}
          <Route exact path={`/`} component={Articles} />

          {/* User */}
          <Route path={`/sign-up`} component={SignUp} />
          <Route path={`/login`} component={Login} />
          <Route path={`/profile`} component={Profile} />

          {/* Articles */}
          <Route path={`/new-article`} component={NewArticle} />
          <Route path={`/article/:id`} component={Article} />
        </Router>

      </div>
    );
  }
}

export default App;
