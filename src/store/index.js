import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listMenu: [],
    listCategories: [],
    listProducts: [],
    cart: [],
  },
  getters: {
    listMenu(state) {
      return state.listMenu;
    },
    listCategories(state) {
      return state.listCategories;
    },
    listProducts(state) {
      return state.listProducts;
    },
    listCart(state) {
      return state.cart;
    },
  },
  mutations: {
    updateListMenu(state, payload) {
      state.listMenu = payload;
    },
    updateListCategories(state, payload) {
      state.listCategories = payload;
    },
    updateListProducts(state, payload) {
      state.listProducts = payload;
    },
    updateListCart(state, payload) {
      state.listCart = payload;
    },
  },
  actions: {
    getListMenu({ commit }) {
      axios
        .get("http://localhost:3000/menu")
        .then(({ data }) => commit("updateListMenu", data));
    },
    getListCategories({ commit }) {
      axios
        .get("http://localhost:3000/categories?_embed=products")
        .then(({ data }) => commit("updateListCategories", data));
    },
    getListProducts({ commit }, params) {
      axios
        .get("http://localhost:3000/products", { params })
        .then(({ data }) => commit("updateListProducts", data));
    },
    addListCart({ state, commit }, item) {
      let arr = state.cart;
      arr.push(item);
      commit("updateListCart", arr);
    },
  },
});
