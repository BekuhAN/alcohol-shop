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
          <router-link class="btn" to="/products">Подробнее</router-link>
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
          <router-link class="btn" to="/products">Подробнее</router-link>
        </div>
        <div
          class="slider__item"
          :class="{ active: slideItem == 3 }"
          :style="{ backgroundImage: 'url(' + getImgUrl('banner-3.jpg') + ')' }"
        >
          <div class="slider__item__title">Скидки до 40%</div>
          <div class="slider__item__sub_title">на напитки Fanta</div>
          <router-link class="btn" to="/products">Подробнее</router-link>
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
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      slideItem: 1,
    };
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
  components: {},
};
</script>

<style lang="scss">
.slider {
  .container {
    position: relative;
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
    right: 30px;
  }
  &__prev {
    left: 30px;
  }
}
.about {
  background: url("../assets/img/bg-1.png") no-repeat;
  background-size: auto 130%;
  background-position-x: 180px;
  padding: 100px 0;
  .section_title {
    font-size: 42px;
    letter-spacing: 3px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
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
</style>
