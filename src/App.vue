<template>
  <div class="app">
    <Header :title="'MovieFy: Your Ultimate Movie Finder'" />
    <Search :search="state.search" @search="handleSearch" />
    <p class="intro">Search your favorite movies</p>
    <div class="movies">
      <Movie v-for="movie in state.movies" :movie="movie" :key="movie.imdbID" />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Search from './components/Search.vue';
  import Movie from './components/Movie.vue';
  import { useMovieApi } from './hooks/movie-api'
  
  export default{
    name: 'app',
    components: { 
      Header, 
      Search, 
      Movie 
    },
    setup() {
      const state = useMovieApi();
      
      const handleSearch = (searchTerm) => {
        state.loading = true;
        state.search = searchTerm;
      };
      
      return { state, handleSearch };
    }
  }
</script>

<style>
  .app {
    text-align: center;
    background-color: #e4ecc9;
  }
  .header {
    background-color: #2a2b6a;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(8px + 2vmin);
    color: #e4ecc9;
    padding: 20px;
    cursor: pointer;
  }
  .spinner {
    height: 80px;
    margin: auto;
  }
  .intro {
    font-size: large;
    margin-block: 10px 20px;
  }
  /* new css for movie component */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .header h2 {
    margin: 0;
  }

  .add-movies {
    text-align: center;
  }
  .add-movies button {
    font-size: 16px;
    padding: 8px;
    margin: 0 10px 30px 10px;
  }
  .movie {
    padding: 5px 25px 10px 25px;
    max-width: 25%;
  }
  .errorMessage {
    margin: auto;
    font-weight: bold;
    color: rgb(161, 15, 15);
  }
  .search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
  input[type="submit"] {
    padding: 5px;
    background-color: transparent;
    color: #2a2b6a;
    border: 1px solid #2a2b6a;
    border-radius: 6px;
    width: 80px;
    margin-left: 5px;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: #19193e;
    color: #e4ecc9
  }
  .search > input[type="text"]{
    width: 40%;
    min-width: 170px;
    padding-inline-start: 10px;
    color: #2a2b6a;
    border: none;
    border-radius: 6px;
  }

  @media screen and (min-width: 694px) and (max-width: 915px) {
    .movie {
      max-width: 33%;
    }
  }
  @media screen and (min-width: 652px) and (max-width: 693px) {
    .movie {
      max-width: 50%;
    }
  }
  @media screen and (max-width: 651px) {
    .movie {
      max-width: 100%;
      margin: auto;
    }

  }
</style>