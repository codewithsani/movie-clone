import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "04bbd50bb9f6af2e0ed6e361207b49e5",
  },
});
