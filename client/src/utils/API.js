import axios from "axios";

export default {
  // Gets all content
  getContents: function () {
    return axios.get("/api/content");
  },
  // Gets the book with the given id
  getContentDates: function (initDate, endDate) {
    return axios.get(`/api/content/range?start=${initDate}&end=${endDate}`);
  },
  // Deletes the book with the given id
  deleteContent: function (id) {
    return axios.delete("/api/content/" + id);
  },
  // Saves a book to the database
  saveContent: function (dateData) {
    return axios.post("/api/content", bookData);
  },
};
