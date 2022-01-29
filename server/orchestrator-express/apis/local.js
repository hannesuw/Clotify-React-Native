const axios = require("axios");

const usersApi = axios.create({ baseURL: "http://localhost:4001" });
const appApi = axios.create({ baseURL: "http://localhost:4002" });

module.exports = { usersApi, appApi };
