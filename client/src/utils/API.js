import axios from "axios";

export default {
  signin: function (formData) {
    return axios.post("/signin", formData);
  },
  // Gets all memes
  getFeeds: function () {
    return axios.get("/api/feeds");
  },
  getFeed: function (id) {
    return axios.get("/api/feeds" + id);
  },
  // Saves memes to the database
  saveFeed: function (feedData) {
    return axios.post("/api/feeds", feedData);
  },
  getSessionData: function () {
    return axios.get('/api/user/session');
  },
  getMemesByUser: function (user) {
    return axios.post('/api/user/getMemesByUser', user);
  },
  uploadMeme: function (meme) {
    return axios.post('/api/user/uploadMeme', meme);
  },
  getMemesByChannelName: function (channelName) {
    return axios.post('/api/channel/getMemesByChannelName', channelName);
  },
  // getMemesByChannelTwitchId: function () {
  //   return axios.post('/api/channel/getMemesByChannelTwitchId', channelTwitchId);
  // },
  getMemesByChannelId: function (channelId) {
    return axios.post('/api/channel/getMemesByChannelId', channelId);
  },
  createChannel: function (channel) {
    return axios.post('/api/channel/createChannel', channel);
  }

}