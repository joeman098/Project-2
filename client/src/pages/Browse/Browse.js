import React, { Component } from "react";
import LoginNav from "../../components/LoginNav";
import "./Browse.css";
import twitch from "../../utils/twitchAPI";
import SearchRes from "../../components/SearchRes";
import { Container, Row } from "../../components/Grid/";


class Browse extends Component {
    state = {
        results:[],
        search: ""
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
                <LoginNav handleInputChange={this.handleInputChange} handleSearchSubmit={this.handleSearchSubmit}/>
                <Container>
                    <Row>
                    <div className="search-results">
                    {this.state.results.map(res => (
                    <SearchRes 
                        pic ={res.thumbnail_url} 
                        title={res.title}
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
