<template>
  <form class="search">
    <input
       type="text"
       :value="movieTitle"
       @keyup="handleChange"
    />
    <input @click="handleSubmit" type="submit" value="SEARCH" />
  </form>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'Search',
    props: {
      search: String
    },
    setup(props, { emit }) {
      const movieTitle = ref(props.search);
      const handleSubmit = (event) => {
        event.preventDefault();
        emit('search', movieTitle.value);
      };
      const handleChange = (event) => {
        movieTitle.value = event.target.value;
      };
      return {
        movieTitle,
        handleSubmit,
        handleChange
      };
    }
  };
</script>