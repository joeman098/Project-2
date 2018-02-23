import axios from "axios";

const twitch = axios.create({
  baseURL: 'https://api.twitch.tv/helix/',
});
twitch.defaults.headers['Client-ID'] = "qb7j7t7t5tx4faioanh084713yztiz";

export default {
  Top: function() {
    twitch.defaults.baseURL = 'https://api.twitch.tv/helix/streams?first=20';
    return twitch.get();
  },
  TopGames: function () {
    twitch.defaults.baseURL = 'https://api.twitch.tv/helix/games/top?first=40'; 
    return twitch.get();
  },
  GameStreams: function (gameID) {  
    twitch.defaults.baseURL = `https://api.twitch.tv/helix/streams?first=50?game_id=${gameID}`;  
    return twitch.get();
  },
  UserSearch: (userName) => {
    twitch.defaults.baseURL = `https://api.twitch.tv/helix/streams?user_login=${userName}`
    return twitch.get();
  }
};
