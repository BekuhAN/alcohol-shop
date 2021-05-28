<template>
  <div class="col-3 product_item">
    <figure class="image">
      <img v-if="product.image" :src="getImgUrl(product.image)" />
      <img v-else src="../assets/img/no-photo.png" />
      <div v-if="product.sale" class="sale">- {{ product.sale }}%</div>
      <div v-if="product.new" class="new">Новинка</div>
    </figure>
    <div class="description">
      <div class="name">{{ product.title }}</div>
      <div class="prices">
        <div class="before_sale" :class="{ sale_price: product.sale }">
          {{ product.price }}
          <font-awesome-icon class="icon" icon="ruble-sign" />
        </div>
        <div v-if="product.sale" class="after_sale">
          {{ Math.ceil(product.price - (product.price * product.sale) / 100)
          }}<font-awesome-icon class="icon" icon="ruble-sign" />
        </div>
      </div>
    </div>
    <div class="navigate">
      <div class="navigate__item product_more">
        <font-awesome-icon class="icon" icon="eye" />
      </div>
      <div class="navigate__item product_add">
        <font-awesome-icon class="icon" icon="cart-plus" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    getImgUrl(image) {
      return require("../assets/img/" + image);
    },
  },
};
</script>

<style lang="scss">
.product_item {
  padding: 15px;
  position: relative;
  border: 1px solid #eee;
  margin-left: -1px;
  margin-top: -1px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px #ccc;
    .navigate__item {
      transform: scale(1);
    }
  }
  .image {
    overflow: hidden;
    height: 200px;
    display: flex;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  .sale,
  .new {
    position: absolute;
    top: 25px;
    left: 25px;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
  }
  .new {
    background: #7fd02c;
  }
  .sale {
    background: #e52029;
  }
  .description {
    margin-top: 15px;
    .name {
      text-align: center;
      min-height: 50px;
      max-height: 50px;
      overflow: hidden;
      margin-bottom: 15px;
    }
    .prices {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #e52029;
      font-weight: bold;
      font-size: 18px;
      .icon {
        font-size: 16px;
      }
    }
  }
  .navigate {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &__item {
      margin: 0 5px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      transform: scale(0);
      transition: all 0.3s ease-in-out;
      &:hover {
        opacity: 0.9;
      }
      &.product_more {
        background: #7fd02c;
      }
      &.product_add {
        background: #e52029;
        transition-delay: 0.1s;
      }
    }
  }
}
</style>
