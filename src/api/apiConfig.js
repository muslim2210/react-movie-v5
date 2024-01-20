const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "5a9c8fab90c7511337454191383e16e1",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
