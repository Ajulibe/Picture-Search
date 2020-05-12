import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID -GKVDZfW0uvjdef0_Suf4735CyA3u6xoE6_xtavMDPQ",
  },
});
