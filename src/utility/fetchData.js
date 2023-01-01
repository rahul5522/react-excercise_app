export const giveData = async (url) => {
  let options = {};
  //For passing diff ooptions for diff API
  if (url[8] === "e") {
    options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a2da85f153mshaccc1dd70a3901dp1e5e72jsne181faa35b5e",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
  } else {
    options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a2da85f153mshaccc1dd70a3901dp1e5e72jsne181faa35b5e",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };
  }

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
};
