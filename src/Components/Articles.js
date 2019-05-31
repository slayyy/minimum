import React, { Component } from 'react';
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import api from '../api'

export default class Articles extends Component {

  constructor() {
    super()
    this.state = {
      articles: []
    }
  };

  componentDidMount() {
    api.getAllArticles().then((result) => {
      this.setState({
        articles: result,
      })
    }) 
  }

  render() {
    
    return(
        <div className="articles">
        
          <h1>Articles</h1>

          {this.state.articles.reverse().map(article => {
            return(
              <div className="articles-wrapper" key={article.id}>
                <div><strong>Auteur : </strong>{article.User.firstname} {article.User.lastname}</div>
                <div><strong>Title : </strong>{article.title}</div>
                <div><strong>Content : </strong>{article.content}</div>
                <div><NavLink to={`/article/${article.id}`}><button>Read More...</button></NavLink></div>
              </div>
            )
          })}

        </div>
    )
  }

}