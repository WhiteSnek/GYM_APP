export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '489d6caaddmshf356c9aa224e3dfp16fbccjsna5c42e96daf0',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '489d6caaddmshf356c9aa224e3dfp16fbccjsna5c42e96daf0',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};