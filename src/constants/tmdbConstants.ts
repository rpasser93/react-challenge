export const tmdbBaseUrl = 'https://api.themoviedb.org/3';

export const tmdbOptions = {
  METHOD: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
};
