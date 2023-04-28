<template>
  <div class="movie">
    <a :href="'https://www.imdb.com/title/' + movie.imdbID" target="_blank">
      <div class="poster">
        <img :src="movie.Poster" alt="Movie poster" width="200"/>
      </div>
      <div class="title">{{ movie.Title }}</div>
      <div class="year">{{ movie.Year }}</div>
    </a>
  </div>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: "Movie",
    props: {
      movie: Object
    },
    setup(props) {
      const altText = computed(() => `The movie titled: ${props.movie.Title}`);
      return { 
        altText 
      };
    }
  };
</script>

<style scoped>
a{
  text-decoration: none;
  color: #2a2b6a
}
.movie {
  padding: 5px 25px 10px 25px;
  max-width: 25%;
  transition: all 0.2s ease;
}
.movie:hover {
  cursor: pointer;
  color: rgba(90, 82, 82, 0.8);
  transform: scale(1.05);
  opacity: 0.8;
}
.poster {
  width: 100%;
  height: 0;
  padding-bottom: 150%;
  position: relative;
}
.poster img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.title {
  font-weight: bold;
  margin-top: 5px;
}
.year {
  margin-top: 2px;
}

@media screen and (max-width: 600px) {
  .movies {
    flex-direction: column;
    align-items: center;
  }
  
  .movie {
    max-width: 100%;
  }
}
</style>