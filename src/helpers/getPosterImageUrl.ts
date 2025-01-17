export const getPosterImageUrl = (posterPath: string) => {
  if (!posterPath) {
    return '/defaultPoster.png';
  }
  const posterUrl: string = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  return posterUrl;
};
