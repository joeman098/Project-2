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
  }
  
}