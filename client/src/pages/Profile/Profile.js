import React from "react";
import UserMemes from "../../components/UserMemes";
import API from "../../utils/API";
import SearchNav from "../../components/SearchNav";
import "./Profile.css";
import SearchRes from "../../components/SearchRes";
import { Container, Row } from "../../components/Grid/";
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Profile extends React.Component {
    state = {
        userId: "",
        userData: {},
        isOwn: false,
        modalIsOpen: false,
        banner: ""
    }

    componentDidMount() {
        this.setState({ userId: this.props.match.params.id });
        this.getSession();
    }

    getSession = () => {
        API.getSessionData()
            .then(function (result) {
                console.log(result.data._id);
                console.log(this.props.match.params.id);
                if (result.data._id === this.props.match.params.id) {
                    this.setState({ isOwn: true });
                }
                this.getUserData();
            }.bind(this))
            .catch(err => console.log(err));
    }

    getUserData() {
        API.getUserData({ userId: this.state.userId }).then(function (result) {
            console.log(result);
            this.setState({ userData: result.data });
        }.bind(this)).catch(err => console.log(err));
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    openModal = ()  => {
        this.setState({ modalIsOpen: true });
    }
    handleFormInput = event =>  {
        this.setState({banner: event.target.value});
    }
    handleFormSubmit = () => {
        API.updateProfile({banner: this.state.banner}).then(res => {
            this.getUserData();
        }).catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Banner"
                    style={customStyles}
                >

                    <div>Please Enter Image URL for your banner</div>
                    <form>
                        <input type="text" name="banner" onChange={this.handleFormInput} />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </Modal>
                <video autoPlay loop muted preload="true" className="fullscreen-bg_video">
                    <source src="../../../video/Circuit_Background.mp4"></source>
                </video>
                <SearchNav handleInputChange={this.handleInputChange} handleSearchSubmit={this.handleSearchSubmit} topGames={this.TopGames} topStreams={this.Top} isUserChecked={this.state.isUserChecked} isGameChecked={this.state.isGameChecked} />
                {
                    this.state.isOwn ?
                        // is own profile include chat and user management
                        <div className="container profile">

                            <div className="fb-profile">
                                <button onClick={this.openModal} className="btn btn-primary updateBanner">Change Banner</button>

                                <img align="left" className="fb-image-lg" src={this.state.userData.banner ? this.state.userData.banner : "https://wikitravel.org/upload/shared//6/6a/Default_Banner.jpg"} alt="Profile image example" />
                                <img align="left" className="fb-image-profile thumbnail" src={this.state.userData.avatar} alt="Profile image example" />

                                <div className="fb-profile-text">
                                    <h1 className="username">{this.state.userData.username}</h1>
                                    <p className="bio">{this.state.userData.bio}</p>
                                </div>
                            </div>
                        </div>
                        :

                        <div className="container profile">

                        <div className="fb-profile">

                            <img align="left" className="fb-image-lg" src={this.state.userData.banner ? this.state.userData.banner : "https://wikitravel.org/upload/shared//6/6a/Default_Banner.jpg"} alt="Profile image example" />
                            <img align="left" className="fb-image-profile thumbnail" src={this.state.userData.avatar} alt="Profile image example" />

                            <div className="fb-profile-text">
                                <h1 className="username">{this.state.userData.username}</h1>
                                <p className="bio">{this.state.userData.bio}</p>
                            </div>
                        </div>
                    </div>

                }


            </div>
        )
    }
}

export default Profile;