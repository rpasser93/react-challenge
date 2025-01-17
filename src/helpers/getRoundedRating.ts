export const getRoundedRating = (voteAverage: number) => {
  if (!voteAverage) {
    return '0.0';
  }
  const roundedRating: string = voteAverage.toFixed(1);
  return roundedRating;
};
