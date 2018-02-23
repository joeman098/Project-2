import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import FeedCard from "../../components/FeedCard";
// import FeedModal from "../../components/FeedModal";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input2,  FormBtn } from "../../components/Form";
// import { Carousel } from 'react-responsive-carousel';
// import {Slider} from 'react-slick';
import Slider from '../../slider';
// import Modal from 'react-modal';
import {Button, Icon, Modal, Row, Col, Container} from 'react-materialize'
import LoginNav from "../../components/LoginNav";
import "./FeedStyles.css";




class Feed extends Component {
  state = {
    feedz: [],
    poster: "",
    link: "",
    modalIsOpen: false
  };



  componentDidMount() {
    this.loadFeed();
   
  }

  loadFeed = () => {
    API.getFeeds()
      .then(res =>
        
        this.setState({ feedz: res.data, poster: "", link: "" })
        
      )
      .catch(err => console.log(err));
     
  };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadFeed())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.poster && this.state.link) {
      API.saveFeed({
        poster: this.state.poster,
        link: this.state.link
      
      })
        .then(res => this.loadFeed())
        .catch(err => console.log(err));
    }
  };





  render() {
    const settings = {
      showArrows:true,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      mobileFirst: true,
     
    };


    
    
    return (
      
      <Container fluid>
      <LoginNav />
        <Row className="feedRow">
        <Col s={6} className="feedCol">
        {/* <div id="twitch-embed"></div> */}
        <iframe
        className ="player"
    src="http://player.twitch.tv/?channel=deadmau5&muted=true"
    // height="500px"
    // width="750px"
    frameBorder="<frameborder>"
    scrolling="<scrolling>"
    allowFullScreen="<allowfullscreen>">
</iframe>
        </Col>
        <Col s={2} className="feedCol"> 
        <iframe frameBorder="0" 
        scrolling="no" 
        id="chat_embed" 
        src="http://www.twitch.tv/embed/deadmau5/chat" 
        height="500px" 
        width="500px">
</iframe>
        </Col>
</Row>
<Row className="feedRow">
          <Col size="md-12 sm-12" className="feedCol" >
           
            <form>
              <Input2
                value={this.state.poster}
                onChange={this.handleInputChange}
                name="poster"
                placeholder="poster (required)"
              />
              <Input2
                value={this.state.link}
                onChange={this.handleInputChange}
                name="link"
                placeholder="link (required)"
              />
              
              <FormBtn
                disabled={!(this.state.link && this.state.poster)}
                onClick={this.handleFormSubmit}
              >
                Submit Link
              </FormBtn>
            </form>
          </Col>
         </Row>
        
         <Row className="feedRow">
          <Col s={12}  className="feedCol">
          <Slider {...settings}>
         {this.state.feedz.map(feed => (
           
          <div key={feed._id}>
           <FeedCard 
            
            id={feed._id}
            poster ={feed.poster} 
            link= {feed.link}
            openModal={this.openModal}
   
          />

                  <Modal
                    header='s0cial3r shared!'
                    trigger={<Button waves='light'>Click ME!<Icon right>insert_chart</Icon></Button>}>
     
                    <div className='card '>
                      <img alt={feed.link} src={feed.link} className="imagez card-img openModal" />
                      <div className="card-img-overlay h-100 d-flex flex-column justify-content-end" >
                        <ul>
                          <li>
                            <strong>Posted By:</strong> {feed.poster}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Modal>

            </div>

        ))}

 
  </Slider>
      
          </Col>
          
        
        </Row>
      </Container>
    )
  }
}

export default Feed;
