<template>
  <div class="col-3 product_item">
    <figure class="image">
      <img v-if="product.image" :src="getImgUrl(product.image)" />
      <img class="no_image" v-else src="../assets/img/no-photo.png" />
      <div v-if="product.oldPrice" class="sale">
        - {{ Math.ceil(100 - (product.price / product.oldPrice) * 100) }}%
      </div>
      <div v-if="product.new" class="new">Новинка</div>
    </figure>
    <div class="description">
      <div class="name">{{ product.title }}</div>
      <div class="prices">
        <div class="before_sale">
          {{ product.price }}
          <font-awesome-icon class="icon" icon="ruble-sign" />
        </div>
        <div v-if="product.oldPrice" class="after_sale sale_price">
          {{ product.oldPrice
          }}<font-awesome-icon class="icon" icon="ruble-sign" />
        </div>
      </div>
    </div>
    <div class="navigate">
      <div class="navigate__item product_more" @click="showModal">
        <font-awesome-icon class="icon" icon="eye" />
      </div>
      <div class="navigate__item product_add" @click="addListCart(product)">
        <font-awesome-icon class="icon" icon="cart-plus" />
      </div>
    </div>
    <div class="product_item__modal" v-if="isModal">
      <div class="container">
        <div class="product_item__modal__body row">
          <font-awesome-icon
            class="close_icon"
            @click="showModal"
            icon="times"
          />
          <div class="col-4 product_item__modal__body__image">
            <figure>
              <img v-if="product.image" :src="getImgUrl(product.image)" />
              <img v-else src="../assets/img/no-photo.png" />
              <div v-if="product.oldPrice" class="sale">
                -
                {{ Math.ceil(100 - (product.oldPrice / product.price) * 100) }}%
              </div>
              <div v-if="product.new" class="new">Новинка</div>
            </figure>
          </div>
          <div class="col-8">
            <div class="product_item__modal__body__name">
              {{ product.title }}
            </div>
            <div class="product_item__modal__body__content">
              <div class="description">
                <div class="title">Описание</div>
                <p v-if="product.description">{{ product.description }}</p>
                <p v-else>Описание отсутсвует</p>
              </div>
              <div class="description">
                <div class="title">Характеристики</div>
                <div
                  class="detail_item"
                  v-for="(item, index) in product.detail"
                  :key="index"
                >
                  <div class="detail_item__name">{{ item.name }}</div>
                  <div class="detail_item__value">{{ item.value }}</div>
                </div>
              </div>
            </div>
            <div class="product_item__modal__body__footer">
              <div class="prices">
                <div class="before_sale">
                  {{ product.price }}
                  <font-awesome-icon class="icon" icon="ruble-sign" />
                </div>
                <div v-if="product.oldPrice" class="after_sale sale_price">
                  {{ product.oldPrice
                  }}<font-awesome-icon class="icon" icon="ruble-sign" />
                </div>
              </div>
              <div class="number">
                <button
                  class="number__minus"
                  type="button"
                  onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();"
                >
                  -
                </button>
                <input v-model="product.qty" type="number" max="200" min="1" />
                <button
                  class="number__plus"
                  type="button"
                  onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();"
                >
                  +
                </button>
              </div>
              <button class="btn add" @click="addListCart(product)">
                В корзину <font-awesome-icon class="icon" icon="cart-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    ...mapActions(["addListCart"]),
    getImgUrl(image) {
      return require("../assets/img/" + image);
    },
    showModal() {
      this.isModal = !this.isModal;
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
    .no_image {
      height: auto;
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
      .sale_price {
        color: #2c3e50;
        font-weight: 400;
        margin-left: 20px;
        font-size: 14px;
        text-decoration: line-through;
        .icon {
          font-size: 14px;
        }
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
  &__modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, 0.7);
    z-index: 5;
    display: flex;
    align-items: center;
    &__body {
      background: #fff;
      border-radius: 60px;
      position: relative;
      padding: 50px;
      .close_icon {
        position: absolute;
        top: -15px;
        right: -15px;
        z-index: 6;
        font-size: 32px;
        color: #7fd02c;
      }
      &__image {
        figure {
          display: flex;
          justify-content: center;
          overflow: hidden;
          height: 300px;
          img {
            height: 100%;
          }
        }
      }
      &__name {
        font-weight: bold;
        font-size: 18px;
      }
      &__content {
        max-height: 300px;
        overflow-y: auto;
        margin: 30px 0;
        .description {
          padding-right: 15px;
          .title {
            text-transform: uppercase;
            font-size: 18px;
            letter-spacing: 2px;
            border-bottom: 1px solid #ccc;
            margin-bottom: 15px;
          }
          .detail_item {
            display: flex;
            justify-content: space-between;
            position: relative;
            z-index: 2;
            &::before {
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
              content: "";
              width: 100%;
              border-bottom: 1px dashed #7fd02c;
              z-index: -1;
            }
            &__name,
            &__value {
              background: #fff;
            }
            &__name {
              padding-right: 10px;
            }
            &__value {
              padding-left: 10px;
            }
          }
        }
      }
      &__footer {
        display: flex;
        .prices {
          display: flex;
          align-items: center;
          color: #e52029;
          font-weight: bold;
          font-size: 20px;
          .icon {
            font-size: 16px;
          }
          .sale_price {
            color: #2c3e50;
            font-weight: 400;
            margin-left: 20px;
            font-size: 14px;
            text-decoration: line-through;
            .icon {
              font-size: 14px;
            }
          }
        }
        .number {
          display: flex;
          position: relative;
          width: 100px;
          margin: 0px 50px;
          input[type="number"] {
            display: block;
            height: 32px;
            font-size: 22px;
            width: 100%;
            border: none;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            text-align: center;
            -moz-appearance: textfield;
            -webkit-appearance: textfield;
            appearance: textfield;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              display: none;
            }
          }
          &__minus {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 30px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            font-size: 20px;
            background: #7fd02c;
            color: #fff;
            border-radius: 5px;
            font-weight: bold;
          }
          &__plus {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 30px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            font-size: 20px;
            background: #7fd02c;
            color: #fff;
            border-radius: 5px;
            font-weight: bold;
          }
        }
        .btn.add {
          background: #e52029;
          color: #fff;
          text-transform: uppercase;
          border: none;
          height: 32px;
          padding: 0px 20px;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
          .icon {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
