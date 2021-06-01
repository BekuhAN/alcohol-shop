<template>
  <main class="catalog">
    <div class="container">
      <div class="section_title">Каталог</div>
      <div class="row">
        <div class="col-3 category_list">
          <div class="category_list__title">Категории</div>
          <ul class="category_list__list">
            <li class="category_list__list__item" @click="selectedCategory([])">
              <router-link
                to="/catalog?_limit=8&_page=1&all=true"
                :class="{ active: !$route.query.categoryId }"
                >Все товары</router-link
              >
              <span class="count_products"> {{ list.length }} </span>
            </li>
            <li
              class="category_list__list__item"
              v-for="cat of listCategories"
              :key="cat.id"
              @click="selectedCategory(cat.products)"
            >
              <router-link
                :to="{
                  path: '/catalog',
                  query: {
                    categoryId: cat.id,
                    _page: 1,
                    _limit: 8,
                  },
                }"
                :class="{
                  'router-link-exact-active': cat.id == selectedIdCategory,
                }"
              >
                {{ cat.name }}
              </router-link>
              <span class="count_products"> {{ cat.products.length }} </span>
            </li>
          </ul>
        </div>
        <div class="col-9 catalog_list">
          <div class="col-12 filter_products">
            Сортировка
            <select
              v-model="sortSelected"
              @change="sorting"
              class="filter_products__list"
            >
              <option selected value="">По умолчанию</option>
              <option value="title_asc">По имени: A-Z</option>
              <option value="title_desc">По имени: Z-A</option>
              <option value="price_asc">По цене: возрастанию</option>
              <option value="price_desc">По цене: убыванию</option>
            </select>
          </div>
          <div class="col-12 row">
            <ProductItem
              :product="item"
              v-for="(item, index) in listProducts"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductItem from "../components/productItem";
import axios from "axios";
export default {
  data() {
    return {
      params: {
        _limit: 8,
        _page: 1,
      },
      sortSelected: "",
      activeCategory: [],
      selectedIdCategory: null,
      list: [],
    };
  },
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(["listProducts", "listCategories"]),
    selectCategory() {
      if (!this.activeCategory.length) {
        return Math.ceil(this.list.length / 8);
      } else {
        return Math.ceil(this.activeCategory.length / 8);
      }
    },
  },
  methods: {
    ...mapActions(["getListProducts", "getListCategories"]),
    fetchData() {
      const { all } = this.$route.query;
      if (all) {
        this.params = Object.assign({}, { ...this.$route.query });
      } else {
        this.params = Object.assign({}, this.params, { ...this.$route.query });
      }
      this.getListProducts(this.params);
      this.getListCategories();
    },
    sorting() {
      if (this.sortSelected) {
        this.params._sort = this.sortSelected.split("_")[0];
        this.params._order = this.sortSelected.split("_")[1];
      } else {
        this.params._sort = "";
        this.params._order = "";
      }
      this.getListProducts(this.params);
    },
    selectedCategory(cat) {
      this.activeCategory = cat;
      this.selectedIdCategory = cat.categoryId;
    },
  },
  beforeMount() {
    axios
      .get("http://localhost:3000/products")
      .then((resp) => (this.list = resp.data));
    this.fetchData();
    this.selectedIdCategory = this.$route.query.categoryId;
  },
  watch: {
    $route: "fetchData",
  },
};
</script>

<style lang="scss">
.catalog {
  padding: 100px;
  .category_list {
    &__title {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
      border-bottom: 1px solid #eee;
      font-size: 20px;
      padding-bottom: 15px;
    }
    &__list {
      padding: 0;
      &__item {
        padding: 10px 30px 10px 0;
        display: flex;
        align-items: center;
        position: relative;
        .router-link-exact-active,
        .active {
          position: relative;
          &::before {
            display: block;
            content: "";
            width: 100%;
            height: 2px;
            background: #7fd02c;
            position: absolute;
            left: 0;
            bottom: -5px;
            transition: 0.2s;
          }
        }
        .count_products {
          position: absolute;
          top: 50%;
          right: 0;
          color: #999;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
