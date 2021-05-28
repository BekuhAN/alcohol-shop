<template>
  <div class="carousel" :style="cssProps">
    <div class="carousel__wrapper">
      <div class="carousel__items">
        <slot></slot>
      </div>
    </div>
    <button class="carousel__prev" @click="carouselPrev">
      <font-awesome-icon class="icon" icon="arrow-circle-left" />
    </button>
    <button class="carousel__next" @click="carouselNext">
      <font-awesome-icon class="icon" icon="arrow-circle-right" />
    </button>
  </div>
</template>

<script>
export default {
  props: ["itemCount"],
  data() {
    return {
      currentCountPage: 0,
      margin: 0,
    };
  },
  computed: {
    cssProps() {
      return {
        "--margin-left": this.margin + "%",
      };
    },
  },
  methods: {
    carouselPrev() {
      if (this.currentCountPage > 0) {
        this.currentCountPage--;
      } else {
        this.currentCountPage = this.itemCount - 1;
      }
      this.margin = -100 * this.currentCountPage;
    },
    carouselNext() {
      if (this.currentCountPage < this.itemCount - 1) {
        this.currentCountPage++;
      } else {
        this.currentCountPage = 0;
      }
      this.margin = -100 * this.currentCountPage;
    },
  },
};
</script>

<style lang="scss">
.carousel {
  position: relative;
  overflow: hidden;
  &:hover {
    .carousel__next {
      right: 30px;
    }
    .carousel__prev {
      left: 30px;
    }
  }
  &__wrapper {
    overflow: hidden;
  }
  &__items {
    display: flex;
    margin-left: var(--margin-left);
    transition: 0.5s;
    flex-wrap: nowrap;
    align-items: center;
  }
  &__next,
  &__prev {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #e52029;
    font-size: 30px;
    transition: 0.2s;
    cursor: pointer;
    background: none;
    border: none;
    z-index: 3;
    &:hover {
      opacity: 0.8;
    }
  }
  &__next {
    right: -50px;
  }
  &__prev {
    left: -50px;
  }
  &:focus {
    outline: none;
  }
}
</style>
