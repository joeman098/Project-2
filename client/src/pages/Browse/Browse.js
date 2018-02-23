import React, { Component } from "react";
import SearchNav from "../../components/SearchNav";
import twitch from "../../utils/twitchAPI";
import SearchRes from "../../components/SearchRes";
//import { Container, Row } from "../../components/Grid/";
import { Container, Row } from "react-materialize";
import "./Browse.css";;


class Browse extends Component {
    state = {
        results:[],
        search: "",
        isUserChecked: false,
        isGameChecked: false
    }
    
    componentDidMount(){
        this.setState({search: ""})
    }
    
    Top = () => {
        twitch.Top()
        .then(res => {
            this.setState({ results: res.data.data })
            console.log(res.data.data);
        });
    }

    TopGames = () => {
        twitch.TopGames()
        .then(res => {
            this.setState({ results: res.data.data })
            console.log(res.data.data);
        });
    }

    GameStreams = () => {
        twitch.GameStreams()
        .then(res => {
            this.setState({ results: res.data.data })
            console.log(res.data.data);
        });
    }

    UserSearch = () => {
        twitch.UserSearch()
        .then(res => {
            this.setState({ results: res.data.data })
            console.log(res.data.data);
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        this.Top();
    }


    render() {
        return(
            <div>
                <video autoPlay loop muted preload="true" className="fullscreen-bg_video">
                    <source src="../../../video/Circuit_Background.mp4"></source>
                </video>
                <SearchNav handleInputChange={this.handleInputChange} handleSearchSubmit={this.handleSearchSubmit} topGames={this.TopGames} topStreams={this.Top} isUserChecked={this.state.isUserChecked} isGameChecked={this.state.isGameChecked}/>
                <Container>
                    <Row>
                    <div className="search-results">
                    {this.state.results.map(res => (
                    <SearchRes 
                        pic ={res.thumbnail_url ? res.thumbnail_url : res.box_art_url} 
                        title={res.title ? res.title : res.name}
                        className="browse-results"
                    />))}
                    </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Browse;
