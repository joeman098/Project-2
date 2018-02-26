import axios from "axios";

export default {
  // Gets all posts
  getposts: function() {
    return axios.get("/api/socialit");
  },
  // Gets the post with the given id
  getpost: function(id) {
    return axios.get("/api/socialit/" + id);
  },
  // Deletes the post with the given id
  deletepost: function(id) {
    return axios.delete("/api/socialit/" + id);
  },
  // Saves a post to the database
  savepost: function(postData) {
    return axios.post("/api/socialit", postData);
  }
};
