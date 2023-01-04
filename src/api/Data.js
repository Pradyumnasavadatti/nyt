import axios from "axios";
const url = "https://api.nytimes.com/svc/search/v2";

export const getArticle = async (querry,data) =>
  await axios
    .get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${querry}&page=${data}&api-key=${process.env.REACT_APP_API}`
    )
    .then((response) => {
      //   console.log(process.env.REACT_APP_API);
      return response;
    });
