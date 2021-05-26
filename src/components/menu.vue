<template>
  <nav>
    <ul class="menu">
      <li class="menu__item" v-for="(item, index) in listMenu" :key="index">
        <a :href="item.link" class="menu__item__link"> {{ item.name }} </a>
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

<style></style>
