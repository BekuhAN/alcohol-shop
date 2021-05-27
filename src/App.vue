<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header";
export default {
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  color: #2c3e50;
}

body {
  margin: 0;
  line-height: 1.5;
}

* {
  color: inherit;
  text-decoration: none;
  list-style: none;
  transition: inherit;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
