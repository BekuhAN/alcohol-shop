<template>
  <div class="cart">
    <font-awesome-icon class="icon" icon="shopping-basket" @click="showCart" />
    <div class="count">{{ listCart.length }}</div>
    <div class="cart__modal" v-if="visibleCart">
      <div class="cart__modal__wrapper container">
        <font-awesome-icon class="close_icon" @click="showCart" icon="times" />
        <div class="cart__modal__title">Корзина</div>
        <p v-if="!listCart.length" class="no_cart">В корзине пусто :(</p>
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
          <div class="cart__modal__list__wrapper">
            <div
              class="cart__modal__list__item row"
              v-for="(item, index) in listCart"
              :key="index"
            >
              <div class="col-1 index">{{ index + 1 }}</div>
              <div class="col-1 image">
                <img :src="getImgUrl(item.image)" />
              </div>
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
                <font-awesome-icon
                  @click="deleteListCart(item)"
                  class="remove__icon"
                  icon="trash-alt"
                />
              </div>
            </div>
          </div>
          <div class="total">
            В корзине товара на сумму: {{ total }}
            <font-awesome-icon class="icon" icon="ruble-sign" />
          </div>
        </div>
        <div class="cart__modal__control row">
          <form
            class="cart__modal__form col-9"
            id="order_form"
            @submit.prevent="sendEmail"
          >
            <input
              name="order_name"
              type="text"
              class="cart__modal__form__item"
              placeholder="Ваше имя"
              required
            />
            <the-mask
              :mask="['+7 (###) ###-####']"
              required
              placeholder="Ваш номер"
              class="cart__modal__form__item"
              type="phone"
              name="order_phone"
            />
            <input
              name="order_comment"
              type="text"
              class="cart__modal__form__item"
              placeholder="Ваш комментарий (Если хотите заказать доставку, укажите в коментарии адрес)"
            />
            <textarea v-model="sendTemplate" name="order_list"></textarea>
          </form>
          <div class="buttons col-3">
            <button
              class="buttons__item send"
              @click="getTemplateCart(listCart, total)"
              form="order_form"
              type="submit"
            >
              Отправить
            </button>
            <button class="buttons__item clear" @click="clear">Очистить</button>
            <button class="buttons__item cancel" @click="showCart">
              Продолжить покупки
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { TheMask } from "vue-the-mask";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      visibleCart: false,
      sendTemplate: "",
    };
  },
  computed: {
    ...mapGetters(["listCart"]),
    total() {
      let summ = 0;
      for (let index = 0; index < this.listCart.length; index++) {
        summ += this.listCart[index].qty * this.listCart[index].price;
      }
      return summ;
    },
  },
  beforeMount() {},
  methods: {
    ...mapActions(["deleteListCart", "clearListCart"]),
    showCart() {
      this.visibleCart = !this.visibleCart;
    },
    getImgUrl(image) {
      return require("../assets/img/" + image);
    },
    pricePlus(item) {
      if (item.qty < 200) item.qty += 1;
    },
    priceMinus(item) {
      if (item.qty > 1) item.qty -= 1;
    },
    clear() {
      this.clearListCart();
    },
    sendEmail(e) {
      // const self = this;
      emailjs
        .sendForm(
          "service_8pffxs3",
          "template_5ch3p2a",
          e.target,
          "user_XYpsO08lyi9FfEIXnCKaK"
        )
        .then(
          (result) => {
            // self.isSuccess = true;
            e.target.reset();
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            // self.isError = true;
            e.target.reset();
            console.log("FAILED...", error);
          }
        );
    },
    getTemplateCart(items, totalCart) {
      const header =
        "<table><thead><tr><th width='50px' style='text-align: center'>№</th><th style='text-align: center'>Наименование</th><th width='100px' style='text-align: center'>Количество</th><th width='50px'>Цена</th><th width='100px' style='text-align: center'>Сумма</th><th></th></tr></thead><tbody>";
      const cart = items
        .map((item, index) => {
          return `<tr>
    <td width='50px' style='text-align: center'>${index + 1}</td>
    <td>${item.title}</td>
    <td width='100px' style='text-align: center'>
    ${item.qty}
    </td>
    <td width='100px' style='text-align: center'>${item.price} руб.</td>
    <td width='100px' style='text-align: center'>${
      item.price * item.qty
    } руб.</td>
  </tr>`;
        })
        .join("");
      this.sendTemplate = `${header}${cart}</tbody></table><h2 class="cart_total">Итого: ${totalCart} руб.</h2>`;
    },
  },
  components: {
    TheMask,
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
    cursor: default;
    &__form {
      textarea {
        display: none;
      }
      &__item {
        font-size: 12px;
        width: 100%;
        border: none;
        height: 40px;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        font-family: "Montserrat", sans-serif;
        padding-left: 15px;
        border-radius: 10px;
        &::placeholder {
          letter-spacing: 1px;
        }
        &:focus {
          outline: none;
        }
      }
    }
    &__control {
      display: flex;
      .buttons {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        &__item {
          border: none;
          margin: 0px 5px 10px;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          height: 40px;
          color: #fff;
          &:hover {
            opacity: 0.8;
          }
          &.send {
            background: #4db6ac;
          }
          &.cancel {
            background: #e52029;
          }
          &.clear {
            background: #ffa726;
          }
        }
      }
    }
    &__list {
      font-size: 16px;
      margin: 0 0 20px;
      &__wrapper {
        max-height: 180px;
        overflow-y: auto;
        overflow-x: hidden;
        margin-bottom: 30px;
      }
      &__item_title {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        margin-bottom: 20px;
        margin-right: 20px;
      }
      &__item {
        margin-bottom: 10px;
        & > div {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
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
        .count_item {
          .number {
            display: flex;
            position: relative;
            width: 100%;
            margin: 0px 30px;
            input[type="number"] {
              display: block;
              font-family: "Montserrat", sans-serif;
              height: 24px;
              width: 100%;
              border: none;
              font-size: 16px;
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
              width: 24px;
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
              width: 24px;
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
        }
      }
    }
    &__wrapper {
      background: #fff;
      border-radius: 60px;
      position: relative;
      padding: 30px 50px;
      max-height: 650px;
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
