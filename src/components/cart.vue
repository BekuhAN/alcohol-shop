<template>
  <div class="cart">
    <font-awesome-icon class="icon" icon="shopping-basket" @click="showCart" />
    <div class="count">0</div>
    <div class="cart__modal" v-if="visibleCart">
      <div class="cart__modal__wrapper container">
        <font-awesome-icon class="close_icon" @click="showCart" icon="times" />
        <div class="cart__modal__title">Корзина</div>
        <p v-if="!cart.length" class="no_cart">В корзине пусто :(</p>
        <div v-else class="cart__modal__list">
          <div class="cart__modal__list__item_title row">
            <div class="col-1 index">№</div>
            <div class="col-1 image">Изображение</div>
            <div class="col-5 name">Название</div>
            <div class="col-1 price">Цена/шт.</div>
            <div class="col-2 count_item">Кол-во</div>
            <div class="col-1 total_price">Общая сумма</div>
            <div class="col-1 remove">Удалить</div>
          </div>
          <div
            class="cart__modal__list__item row"
            v-for="(item, index) in cart"
            :key="index"
          >
            <div class="col-1 index">{{ index + 1 }}</div>
            <div class="col-1 image"><img :src="getImgUrl(item.image)" /></div>
            <div class="col-5 name">{{ item.title }}</div>
            <div class="col-1 price">{{ item.price }}</div>
            <div class="col-2 count_item">
              <div class="number">
                <button
                  class="number__minus"
                  type="button"
                  @click="priceMinus(item)"
                  onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();"
                >
                  -
                </button>
                <input v-model="item.qty" type="number" max="200" min="1" />
                <button
                  class="number__plus"
                  type="button"
                  @click="pricePlus(item)"
                  onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();"
                >
                  +
                </button>
              </div>
            </div>
            <div class="col-1 total_price">{{ item.price * item.qty }}</div>
            <div class="col-1 remove">
              <font-awesome-icon class="remove__icon" icon="trash-alt" />
            </div>
          </div>
        </div>
        <div class="cart__modal__control"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      visibleCart: false,
      cart: [],
    };
  },
  computed: {
    ...mapGetters(["listCart"]),
  },
  beforeMount() {
    this.cart = this.listCart;
  },
  methods: {
    ...mapActions([""]),
    showCart() {
      this.visibleCart = !this.visibleCart;
    },
    getImgUrl(image) {
      return require("../assets/img/" + image);
    },
    pricePlus(item) {
      item.qty += 1;
    },
    priceMinus(item) {
      item.qty -= 1;
    },
  },
};
</script>

<style lang="scss">
.cart {
  font-size: 28px;
  color: #aaa;
  position: relative;
  transition: 0.1s;
  cursor: pointer;
  &__modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 7;
    display: flex;
    align-items: center;
    background: rgba(#000, 0.6);
    &__list {
      font-size: 16px;
      &__item {
        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .image {
          overflow: hidden;
          display: flex;
          height: 60px;
          justify-content: center;
          img {
            height: 100%;
          }
        }
      }
    }
    &__wrapper {
      background: #fff;
      border-radius: 60px;
      position: relative;
      padding: 50px;
      max-height: 500px;
      .close_icon {
        position: absolute;
        top: -15px;
        right: -15px;
        z-index: 6;
        font-size: 32px;
        color: #7fd02c;
      }
    }
  }
  &:hover {
    color: #666;
  }
  .count {
    position: absolute;
    font-size: 12px;
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
</style>
