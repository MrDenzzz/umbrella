<template>
  <div class="app">
    <navbar-component />
    <h1>Start</h1>
  </div>
</template>

<script>
import NavbarComponent from "./modules/NavbarComponent";

export default {
  name: "hello",
  components: {
    NavbarComponent
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
