const axios = require("axios");

const usersApi = axios.create({
  baseURL: "https://johannes-server-user.herokuapp.com",
});
const appApi = axios.create({
  baseURL: "https://johannes-server-app.herokuapp.com",
});

module.exports = { usersApi, appApi };
