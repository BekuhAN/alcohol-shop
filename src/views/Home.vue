<template>
  <main>
    <section class="slider">
      <div class="container">
        <div
          class="slider__item"
          :class="{ active: slideItem == 1 }"
          :style="{ backgroundImage: 'url(' + getImgUrl('banner-1.jpg') + ')' }"
        >
          <div class="slider__item__title">Скидки до 25%</div>
          <div class="slider__item__sub_title">на напитки Coca-Cola</div>
          <router-link class="btn" to="/catalog">Подробнее</router-link>
        </div>
        <div
          class="slider__item"
          :class="{ active: slideItem == 2 }"
          :style="{ backgroundImage: 'url(' + getImgUrl('banner-2.jpg') + ')' }"
        >
          <div class="slider__item__title">Скидки до 30%</div>
          <div class="slider__item__sub_title">
            на энергетические напитки Adrenaline
          </div>
          <router-link class="btn" to="/catalog">Подробнее</router-link>
        </div>
        <div
          class="slider__item"
          :class="{ active: slideItem == 3 }"
          :style="{ backgroundImage: 'url(' + getImgUrl('banner-3.jpg') + ')' }"
        >
          <div class="slider__item__title">Скидки до 40%</div>
          <div class="slider__item__sub_title">на напитки Fanta</div>
          <router-link class="btn" to="/catalog">Подробнее</router-link>
        </div>
        <div class="slider__prev" @click="sliderPrev">
          <font-awesome-icon class="icon" icon="arrow-circle-left" />
        </div>
        <div class="slider__next" @click="sliderNext">
          <font-awesome-icon class="icon" icon="arrow-circle-right" />
        </div>
      </div>
    </section>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-6 offset-6">
            <div class="section_title">О нас</div>
            <div class="about__descripotion">
              Наш интернет-магазин для тех, кому дороги время и деньги. Наше
              главное отличие от аналогичных ресурсов – реализация
              безалкогольных напитков в рамках прямых поставок от
              производителей.
            </div>
            <router-link to="/about" class="btn">Подробнее</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="ordered">
      <div class="container">
        <div class="row">
          <div class="col-3 ordered__item">
            <div class="image">
              <font-awesome-icon class="icon" icon="fish" />
            </div>
            <div class="title">Качественная продукция</div>
            <div class="description">
              Мы работаем с лучшими поставщиками, чтобы предложить нашим
              клиентам безалкогольные напитки высокого качества.
            </div>
          </div>
          <div class="col-3 ordered__item">
            <div class="image">
              <font-awesome-icon class="icon" icon="dollar-sign" />
            </div>
            <div class="title">Доступные цены</div>
            <div class="description">
              Благодаря нашей доступной ценовой политике нашим клиентам не нужно
              переплачивать за необходимые им товары.
            </div>
          </div>
          <div class="col-3 ordered__item">
            <div class="image">
              <font-awesome-icon class="icon" icon="truck" />
            </div>
            <div class="title">Быстрая доставка</div>
            <div class="description">
              Наш магазин предлагает быструю доставку по всему миру для всех
              клиентов, независимо от того, что и сколько вы заказываете.
            </div>
          </div>
          <div class="col-3 ordered__item">
            <div class="image">
              <font-awesome-icon class="icon" icon="clock" />
            </div>
            <div class="title">Открыты 24/7</div>
            <div class="description">
              В отличие от других продуктовых магазинов, мы готовы обслуживать
              вас 24/7 и предлагать лучший выбор товаров.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="new_products">
      <div class="container">
        <div class="section_title">Новинки</div>
        <div class="row">
          <ProductItem
            :product="item"
            v-for="(item, index) in listNewProducts"
            :key="index"
          />
        </div>
      </div>
    </section>
    <section class="comments">
      <div class="container">
        <div class="section_title">Отзывы о нас</div>
        <Carousel :itemCount="3"
          ><div class="comments__item">
            <div class="comments__item__wrapper">
              <font-awesome-icon class="icon" icon="quote-left" />
              <div class="message">
                Должен сказать, что я действительно впечатлен своим недавним
                заказом. Я уже покупал подобные продукты на других сайтах
                раньше, но на этот раз я выбрал вас из-за вашего большого выбора
                и цен.
              </div>
              <div class="user">
                <div class="image"><img src="../assets/img/user-1.jpg" /></div>
                <div class="name">Светлана</div>
              </div>
            </div>
          </div>
          <div class="comments__item">
            <div class="comments__item__wrapper">
              <font-awesome-icon class="icon" icon="quote-left" />
              <div class="message">
                Я только что получил свой заказ и был по-настоящему поражен. Он
                был так хорошо упакован, и вещи замечательные. Я новичок в том,
                чтобы заказывать еду онлайн, но это был отличный опыт.
              </div>
              <div class="user">
                <div class="image"><img src="../assets/img/user-2.jpg" /></div>
                <div class="name">Николай</div>
              </div>
            </div>
          </div>
          <div class="comments__item">
            <div class="comments__item__wrapper">
              <font-awesome-icon class="icon" icon="quote-left" />
              <div class="message">
                Я получил свой большой заказ сырых веганских продуктов сегодня
                через UPS и был очень впечатлен упаковкой и свежестью, а также
                качеством моих блюд.
              </div>
              <div class="user">
                <div class="image"><img src="../assets/img/user-3.jpg" /></div>
                <div class="name">Валерия</div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
    <section class="sale_products">
      <div class="container">
        <div class="section_title">Скидки</div>
        <div class="row">
          <ProductItem
            :product="item"
            v-for="(item, index) in listSaleProducts"
            :key="index"
          />
        </div>
      </div>
    </section>
    <section class="brands">
      <div class="container">
        <Carousel :itemCount="2">
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-1.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-2.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-3.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-4.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-5.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-6.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-7.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-8.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-9.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-10.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-11.png" />
          </div>
          <div class="col-2 brands__item">
            <img src="../assets/img/brand-12.png" />
          </div>
        </Carousel>
      </div>
    </section>
  </main>
</template>

<script>
import ProductItem from "../components/productItem";
import Carousel from "../components/carousel";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      slideItem: 1,
      listNewProducts: [],
      listSaleProducts: [],
    };
  },
  beforeMount() {
    axios
      .get("http://localhost:3000/products?new=true&_limit=8&_page=1")
      .then(({ data }) => {
        this.listNewProducts = data;
      });
    axios.get("http://localhost:3000/products").then(({ data }) => {
      let arr = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].sale > 0 && arr < 8) {
          this.listSaleProducts.push(data[i]);
          arr++;
        }
      }
    });
  },
  methods: {
    getImgUrl(image) {
      return require("../assets/img/" + image);
    },
    sliderPrev() {
      if (this.slideItem <= 1) {
        this.slideItem = 3;
      } else {
        this.slideItem -= 1;
      }
    },
    sliderNext() {
      if (this.slideItem >= 3) {
        this.slideItem = 1;
      } else {
        this.slideItem += 1;
      }
    },
  },
  components: { ProductItem, Carousel },
};
</script>

<style lang="scss">
.section_title {
  font-size: 42px;
  letter-spacing: 3px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.slider {
  .container {
    position: relative;
    overflow: hidden;
    &:hover {
      .slider__next {
        right: 30px;
      }
      .slider__prev {
        left: 30px;
      }
    }
  }
  &__item {
    height: 500px;
    margin: 0px -15px;
    background-size: 100% auto;
    background-position-y: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    font-weight: bold;
    display: none;
    opacity: 0;
    transition: 0.3s;
    &.active {
      display: flex;
      opacity: 1;
    }
    &__title {
      z-index: 2;
      font-size: 38px;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
    &__sub_title {
      font-size: 24px;
      z-index: 2;
      color: #aaa;
      margin-bottom: 20px;
    }
    .btn {
      z-index: 2;
      background: #e52029;
      height: 50px;
      width: 140px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        color: #e52029;
        background: #fff;
      }
    }
    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.8;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  &__next,
  &__prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #e52029;
    font-size: 30px;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
  &__next {
    right: -30px;
  }
  &__prev {
    left: -30px;
  }
}
.about {
  background: url("../assets/img/bg-1.png") no-repeat;
  background-size: auto 130%;
  background-position-x: 180px;
  padding: 100px 0;
  .btn {
    margin-top: 30px;
    z-index: 2;
    background: #e52029;
    height: 50px;
    width: 140px;
    border-radius: 5px;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: 14px;
    transition: 0.2s;
    &:hover {
      background: rgba(#e52029, 0.8);
    }
  }
}
.ordered {
  background: url("../assets/img/bg-3.png") no-repeat;
  background-size: 100% auto;
  background-attachment: fixed;
  padding: 100px 0;
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.8;
  }
  &__item {
    z-index: 2;
    color: #fff;
    text-align: center;
    .image {
      font-size: 36px;
      color: #e52029;
    }
    .title {
      font-size: 18px;
      text-transform: uppercase;
      margin: 10px 0;
      font-weight: bold;
      transition: 0.2s;
      cursor: pointer;
      letter-spacing: 2px;
      &:hover {
        color: #e52029;
      }
    }
  }
}
.new_products {
  padding: 100px 0;
  .section_title {
    text-align: center;
    margin-bottom: 50px;
  }
}
.comments {
  background: url("../assets/img/bg-4.jpg") no-repeat;
  background-size: auto 100%;
  background-position-x: center;
  padding: 100px 0;
  .section_title {
    text-align: center;
    margin-bottom: 50px;
  }
  .carousel {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      display: block;
      width: 80%;
      height: 70%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      opacity: 0.6;
      border-radius: 60px;
    }
  }
  &__item {
    flex: 0 0 1110px;
    padding: 30px 0;
    z-index: 2;
    &__wrapper {
      width: 70%;
      margin: 0 auto;
      box-shadow: 0 0 18px 0 rgba(#000, 0.13);
      background: #ffffff;
      border-radius: 60px;
      padding: 70px 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        color: #e52029;
        font-size: 38px;
        opacity: 0.5;
      }
      .message {
        text-align: center;
        font-weight: 500;
        font-style: italic;
        margin: 30px 0;
        color: #777;
      }
      .user {
        display: flex;
        align-items: center;
        .image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          img {
            height: 100%;
          }
        }
        .name {
          text-transform: uppercase;
          font-weight: bold;
          margin-left: 20px;
        }
      }
    }
  }
}
.sale_products {
  padding: 100px 0;
  .section_title {
    text-align: center;
    margin-bottom: 50px;
  }
}
.brands {
  padding: 100px 0;
  background: url("../assets/img/bg-2.jpg") no-repeat;
  background-size: 100% auto;
  background-position-y: center;
  position: relative;
  .carousel__next,
  .carousel__prev {
    opacity: 0.4;
    &:hover {
      opacity: 1;
    }
  }
  &::before {
    position: absolute;
    content: "";
    background: #aaa;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  &__item {
    flex: 0 0 185px;
    overflow: hidden;
    filter: grayscale(100%);
    &:hover {
      filter: grayscale(0);
    }
    img {
      width: 100%;
    }
  }
}
</style>
