<template>
  <main>
    <section class="slider">
      <div class="container">
        <div
          class="slider__item"
          :style="{ backgroundImage: 'url(' + getImgUrl('banner-1.jpg') + ')' }"
        >
          <div class="slider__item__title">Скидки до 25%</div>
          <div class="slider__item__sub_title">на напитки Coca-Cola</div>
          <router-link class="btn" to="/products">Подробнее</router-link>
        </div>
        <div
          class="slider__item"
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
          :style="{ backgroundImage: 'url(' + getImgUrl('banner-3.jpg') + ')' }"
        >
          <div class="slider__item__title">Скидки до 40%</div>
          <div class="slider__item__sub_title">на напитки Fanta</div>
          <router-link class="btn" to="/products">Подробнее</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  methods: {
    getImgUrl(image) {
      return require("../assets/img/" + image);
    },
  },
  components: {},
};
</script>

<style lang="scss">
.slider {
  &__item {
    height: 500px;
    margin: 0px -15px;
    background-size: 100% auto;
    background-position-y: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: relative;
    font-weight: bold;
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
      height: 60px;
      width: 140px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
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
}
</style>
