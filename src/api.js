import axios from "axios";

const searchImage = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID WL-WoWbbj_GNihWAQUty32BM3tzMvU-iNj3dnwvlPwU",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default searchImage;
