<template>
  <header>
    <div class="container">
      <div class="row header">
        <div class="logo">
          <figure><img src="../assets/logo.png" /></figure>
        </div>
        <Menu />
        <div class="cart">
          <font-awesome-icon class="icon" icon="shopping-basket" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Menu from "./menu";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="scss">
.header {
 align-items: center;
 justify-content: space-between;
}
</style>
