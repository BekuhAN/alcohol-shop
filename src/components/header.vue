<template>
  <header>
    <div class="container">
      <div class="row header">
        <div class="logo">
          <figure>
            <router-link to="/"><img src="../assets/logo.png" /></router-link>
          </figure>
        </div>
        <Menu />
        <Cart />
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./menu";
import Cart from "./cart";
export default {
  components: {
    Menu,
    Cart,
  },
};
</script>

<style lang="scss">
.header {
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  .logo {
    width: 200px;
    figure {
      margin: 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>
