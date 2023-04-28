import { reactive, watch } from 'vue';

const API_KEY = 'a5549d08';

export const useMovieApi = () => {
  const state = reactive({
    search: 'Star Wars',
    loading: true,
    movies: []
  });

  const fetchMovies = () => {
    const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;

    state.loading = true;

    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        state.movies = jsonResponse.Search.sort((a, b) => new Date(a.Year) - new Date(b.Year));
        state.loading = false;
      });
  }

  watch(() => {
    fetchMovies();
  });

  fetchMovies();

  return state;
};
