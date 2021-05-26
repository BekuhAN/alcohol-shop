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
          <div class="count">0</div>
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
  .cart {
    font-size: 28px;
    color: #aaa;
    position: relative;
    .count {
      position: absolute;
      font-size: 14px;
      border: 3px solid #fff;
      background: #e52029;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      line-height: 1;
      top: -8px;
      right: -8px;
    }
  }
}
</style>
