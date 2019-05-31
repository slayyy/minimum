import React, { Component } from 'react';
import api from '../api'


export default class Article extends Component {

  constructor(props) {
    super(props)

    this.state = {
      article: []
    }
  }

  componentDidMount() {
    const articleId = this.props.match.params.id;

    api.getArticle(articleId).then(result => {
      this.setState({
        article: result 
      })
    })
  }
  
  render() {
    console.log(this.state.article)

    return(
      <div>
        <div><strong>Titre: </strong>{this.state.article.title}</div>
        <div><strong>Content: </strong>{this.state.article.content}</div>
      </div>
    )
  }
}