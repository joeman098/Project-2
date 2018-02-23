import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/socialit");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/socialit/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/socialit/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/socialit", bookData);
  }
};
