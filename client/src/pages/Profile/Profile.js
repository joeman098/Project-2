import React from "react";
import UserMemes from "../../components/UserMemes";
import API from "../../utils/API";

class Profile extends React.Component {
    state = {
        userId: "",
        meme: ""
    }

    componentDidMount() {
        this.setState({userId:this.props.match.params.id})
    }

    uploadMeme = () => {
        API.uploadMeme({link: this.state.meme, upvotes: 0}).then(res => console.log(res));
    }

    handleInput = event => {
        this.setState({meme: event.target.value});
    }

    render() {
        return (
            <div>
                
                <form>
                    
                    <input value={this.state.meme} type="text" onChange={this.handleInput} />
                    <button onClick={this.uploadMeme}>Upload Meme</button>
                </form>
                <UserMemes userId={this.props.match.params.id} />
            </div>
        )
    }
}

export default Profile;