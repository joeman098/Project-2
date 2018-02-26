import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import FeedCard from "../../components/FeedCard";
import FeedModal from "../../components/FeedModal";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input2, FormBtn } from "../../components/Form";
// import { Carousel } from 'react-responsive-carousel';
// import {Slider} from 'react-slick';
import Slider from "../../slider";
// import Modal from 'react-modal';
import { Button, Icon, Modal, Row, Col } from "react-materialize";
import LoginNav from "../../components/LoginNav";
import feedStyles from "./FeedStyles.css";

class Feed extends Component {
  state = {
    feedz: [],
    poster: "",
    link: "",
    modalIsOpen: false,
    channel: {},
    sessionStatus: "",
    memeTitle: ""
  };

  componentDidMount() {
    this.loadFeed();
    this.getSessionData();
  }

killSession() {
  API.destroySession()
  .then(res => console.log(res));
    this.getSessionData();
  }

getSessionData = () => {
  API.getSessionData().then(res => {
    this.setState({User: res.data});
    if(res.data) {
      this.setState({
        sessionStatus: "LOG OUT",
        memeTitle: "Share a Meme"
      });
    }
    else {
      this.setState({
        sessionStatus: "LOG IN",
        memeTitle: "Log In With Twitch to Share a Meme"
      });
    }
  }).catch(err => console.log(err));
}

  loadFeed = () => {
    API.getMemesByChannelName(this.props.match.params.channel)
      .then(res => this.setState({ feedz: res.data, link: "" }))
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
    if ( this.state.link) {
      // API.postMeme({
      //   // poster: this.state.poster,
      //   link: this.state.link,
      //   channel:this.props.match.params.channel,
      //   userName:this.state.User.userName
        
      // })
      //   .then(res => this.loadFeed())
      //   .catch(err => console.log(err));
        API.addMeme({
          // poster: this.state.poster,
          meme: this.state.link,
          channelName:this.props.match.params.channel,
          userId:this.state.User._id
        })
        .then(res => this.loadFeed())
        .catch(err => console.log(err));
    }
  };

  render() {
    const settings = {
      showArrows: true,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      pauseOnHover: true,
      swipeToSlide: true,
      mobileFirst: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    console.log(this.state)
    return (
      <div id="main-twitch-container">
        <video autoPlay loop muted preload="true" className="fullscreen-bg_video">
          <source src="../../../video/Circuit_Background.mp4"></source>
        </video>
        <LoginNav killSession={this.killSession} session={this.state.sessionStatus}/>
        <Container fluid>
          <Row>
            <Col s={10} className="offset-s1" id="content">
              <Row>
                <Col s={12} id="twitch-container">
                  <Row className="tv-player">
                    <Col s={8} id="tv-player-col"> 
                      {/* <div id="twitch-embed"></div> */}
                      <iframe
                        className="player"
                        src={`http://player.twitch.tv/?channel=${
                          this.props.match.params.channel
                        }&muted=true   `}
                        frameBorder="<frameborder>"
                        scrolling="<scrolling>"
                        allowFullScreen="<allowfullscreen>"
                        id="stream-embed"
                      />
                    </Col>
                    <Col s={4} id="chat-col">
                      <iframe
                        frameBorder="0"
                        scrolling="no"
                        id="chat_embed"
                        src={`http://www.twitch.tv/embed/${this.props.match.params.channel}/chat`}
                        height="500px"
                        width="100%"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col s={12} id="post-container">
                  <Row>
                    <h4 id="post-title">{this.state.memeTitle}</h4>
                    <form>
                      <Col s={10}>
                        {/* <Input2
                          value={this.state.poster}
                          onChange={this.handleInputChange}
                          name="poster"
                          placeholder="poster (required)"
                        /> */}
                        <Input2
                          value={this.state.link}
                          onChange={this.handleInputChange}
                          name="link"
                          placeholder="Meme Link (required)"
                        />
                      </Col>
                      <Col s={2}>
                        <FormBtn
                          disabled={!(this.state.link) || (this.state.sessionStatus === "LOG IN")}
                          onClick={this.handleFormSubmit}
                        >
                          Post Meme
                        </FormBtn>
                      </Col>
                    </form>
                  </Row>
                  <Row>
                    <Col s={12}>
                      <Slider {...settings}>
                        {this.state.feedz.map(feed => (
                          <div key={feed._id}>
                            <FeedModal
                              id={feed._id}
                              poster={feed.poster}
                              link={feed.link}
                              openModal={this.openModal}
                            />
                            <FeedCard
                              id={feed._id}
                              poster={feed.poster}
                              link={feed.link}
                              // openModal={this.openModal}
                            />
                          </div>
                        ))}
                      </Slider>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>      
        </Container>
      </div>
    );
  }
}

export default Feed;
