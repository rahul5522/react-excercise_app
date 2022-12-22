export const giveData = async (url) => {
  let options = {};
  //For passing diff ooptions for diff API
  if (url[8] === "e") {
    options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "10dfffb44dmsh368c671d3c8289cp1eb2d6jsn36c3851c37d6",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
  } else {
    options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a2da85f153mshaccc1dd70a3901dp1e5e72jsne181faa35b5e",
        "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
      },
    };
  }

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
};
