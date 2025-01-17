export const getReleaseYear = (releaseDate: string) => {
  if (!releaseDate) {
    return 'N/A';
  }
  const splitText: string[] = releaseDate.split('-');
  const releaseYear: string = splitText[0];
  return releaseYear;
};
