import React, { Component } from "react";
import LoginNav from "../../components/LoginNav";
import "./Browse.css";
import twitch from "../../utils/twitchAPI"
import SearchRes from "../../components/SearchRes"






class Browse extends Component {
    state = {
        results:[]
    }
    componentDidMount(){
        this.Top()
    }
    
    Top = () => {
        twitch.Top()
        .then(res => this.setState({ results: res.data.data }))
    }




    render() {


        return(
          <div>
            <LoginNav />
            {this.state.results.map(res => (
           <SearchRes 
            
           
            pic ={res.thumbnail_url} 

   
          />))}

         </div>
        )

    }

}

export default Browse;
