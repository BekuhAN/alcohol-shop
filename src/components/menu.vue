<template>
  <nav>
    <ul class="menu">
      <li class="menu__item" v-for="(item, index) in listMenu" :key="index">
        <router-link :to="item.link" class="menu__item__link">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  beforeMount() {
    this.getListMenu();
  },
  computed: {
    ...mapGetters(["listMenu"]),
  },
  methods: {
    ...mapActions(["getListMenu"]),
  },
};
</script>

<style lang="scss">
.menu {
  display: flex;
  &__item {
    font-weight: bold;
    padding: 0px 20px;
    transition: 0.2s;
    text-transform: uppercase;
    &:hover,
    .router-link-exact-active {
      color: #e52029;
    }
  }
}
</style>
