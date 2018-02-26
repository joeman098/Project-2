import React, { Component } from "react";
import LoginNav from "../../components/LoginNav";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/socialitAPI";
import { Link } from "react-router-dom";
import { Col, Row,  } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form2";
import {Container,CardTitle,Card } from 'react-materialize'
import SocialitPost from "../../components/SocialitPost/SocialitPost";

import "./socialit.css";
class socialit extends Component {
  state = {
    posts: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadposts();
  }

  loadposts = () => {
    API.getposts()
      .then(res =>
        this.setState({ posts: res.data, link: "", upvotes: "", body: "" ,body: ""})
      )
      .catch(err => console.log(err));
  };

  deletepost = id => {
    API.deletepost(id)
      .then(res => this.loadposts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.savepost({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadposts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
   

      <div>

       <LoginNav />

       <Container className="MainC">
        <Row>
          
          <Col size="md-6"> 
              <h1>Make a Post </h1>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Content (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Post
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
      
              <h1>Posts</h1>
              {this.state.posts.length ? (
                <div>
                {this.state.posts.map(post => (
                <SocialitPost
                  key= {post._id}
                  link ={"/socialit/" + post._id}
                  title ={post.title} 
                  author = {post.author}
                  // delete ={this.deletepost(post._id)}
               /> ))}
               </div>
              ) : (
                <h3>No Results to Display</h3>
              )}
          
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default socialit;
