import React, { Component } from 'react';
import api from "../api"


export default class NewArticle extends Component {

  constructor() {
    super()

    this.state = {
      title: "",
      content:"",
      id: 0
    }

  }

  postArticle() {
    api.postArticle(this.state.title, this.state.content, this.state.id)
  }

  render() {
    return(
      <div className="new-article">
        <div className="title"><input type="text" placeholder="Title" value={this.state.title} onChange={(e) => { this.setState({title: e.target.value}) }}/></div>
        <div className="article-category">

          <select onChange={(e) => { this.setState({id: parseInt(e.target.value)})}}>
            <option>Select a category...</option>
            <option value="1">Développement</option>
            <option value="2">Marketing</option>
            <option value="3">Design</option>
            <option value="4">Jeux vidéo</option>
            <option value="5">Sport</option>
            <option value="6">Musique</option>
            <option value="7">Autre</option>
          </select>

        </div>
        <div className="article-content"><textarea rows="10" cols="50" value={this.state.content} onChange={(e) => { this.setState({content: e.target.value}) }}></textarea></div>
        <div><button onClick={() => { this.postArticle() }}>Post</button></div>

      </div>
    )
  }
}