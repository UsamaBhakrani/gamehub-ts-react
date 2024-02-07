import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e63c3d6796c245448ea641d71d275a37",
  },
});