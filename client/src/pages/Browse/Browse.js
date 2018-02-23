import React, { Component } from "react";
import SearchNav from "../../components/SearchNav";
import twitch from "../../utils/twitchAPI";
import SearchRes from "../../components/SearchRes";
import { Container, Row } from "react-materialize";
import "./Browse.css";


class Browse extends Component {
    state = {
        results:[],
        search: "",
        selected: "users"
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

    GameStreams = (search) => {
        twitch.GameStreams(search)
        .then(res => {
            this.setState({ results: res.data.data })
            console.log(res.data.data);
        });
    }

    UserSearch = (search) => {
        twitch.UserSearch(search)
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

    handleSelectChange = event => {
        this.setState({selected: event.target.value})
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();
        const selected = this.state.selected;
        if(selected === "users") {
            this.GameStreams(this.state.search);
        }
        else if(selected === "games") {
            this.UserSearch(this.state.search);
        }
        console.log(this.state.selected);
    }

    render() {
        return(
            <div>
                <video autoPlay loop muted preload="true" className="fullscreen-bg_video">
                    <source src="../../../video/Circuit_Background.mp4"></source>
                </video>
                <SearchNav handleInputChange={this.handleInputChange} handleSearchSubmit={this.handleSearchSubmit} topGames={this.TopGames} topStreams={this.Top} handleSelectChange={this.handleSelectChange}/>
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
