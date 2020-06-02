import axios from "axios";

export default {
  // Gets all books
  getContents: function () {
    return axios.get("/api/content");
  },
  // Gets the book with the given id
  getContent: function (id) {
    return axios.get("/api/content/" + id);
  },
  // Deletes the book with the given id
  deleteContent: function (id) {
    return axios.delete("/api/content/" + id);
  },
  // Saves a book to the database
  saveContent: function (bookData) {
    return axios.post("/api/content", bookData);
  }
};
