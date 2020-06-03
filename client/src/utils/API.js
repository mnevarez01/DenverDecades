import axios from "axios";

export default {
  // Gets all content
  getContents: function () {
    return axios.get("/api/content");
  },
  // Gets the content with the given data parameters
  getContentDates: function (initDate, endDate) {
    return axios.get(`/api/content/range?start=${initDate}&end=${endDate}`);
  },
  // Gets content with the givin id parameter

  getContent: function(id) {
  return axios.get("/api/content/" + id);
  },
  // Deletes the content with the given id
  deleteContent: function (id) {
    return axios.delete("/api/content/" + id);
  },
  // Saves a content to the database
  saveContent: function (dateData) {
    return axios.post("/api/content", dateData);
  },
};
