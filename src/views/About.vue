<template>
  <main class="about_page">
    <section class="about_page__description">
      <div class="container">
        <div class="section_title">О нас</div>
        <p>
          Наш интернет-магазин для тех, кому дороги время и деньги. Наше главное
          отличие от аналогичных ресурсов – реализация продуктов питания и
          других товаров первой необходимости в рамках прямых поставок от
          производителей.
        </p>

        <div class="title">Покупайте с выгодой!</div>
        <p>
          Наши цены – одно из главных преимуществ интернет-магазина. Они ниже
          цен большинства аналогичных ресурсов, реализующих продукты крупных
          торговых сетей или перепродающих купленное на оптовых базах. Наше
          ценообразование идет по схеме «производитель – покупатель»: в цепочке
          нет посредников, в нее не заложены логистические затраты на
          транспортировку товаров в магазины и наценка самих магазинов. Товары
          сразу от производителей попадают на собственный распредсклад, а далее
          по заказам - к вам домой. Этим же объясняются свежесть продуктов и их
          хорошие сроки годности.
        </p>

        <div class="title">
          «Приятно удивлять» - девиз и постоянно действующая программа
          интернет-магазина.
        </div>
        <p>
          Имея прямые контракты с производителями, транслируем на сайте акции
          для покупателей, сообща тестирует новинки и преподносит приятные
          сюрпризы. (Так всю весну и весь июнь клиенты сервиса получали в
          подарок бутылочку биойогурта «Биактив» для поддержки иммунитета во
          время пандемии).
        </p>

        <p>
          Мы сознательно берем на себя жесткие обязательства по доставке
          продуктов четко в день заказа в выбранные клиентом часы, работая без
          выходных. Особое внимание уделяем безопасности, гарантируем контроль
          не только сроков годности продуктов, но и герметичности упаковок.
        </p>
        <div class="title">
          Еще одно преимущество сервиса – он местный, свой, понимающий нужды
          потребителей вашего региона.
        </div>
        <p>
          Мы готовы принимать заказы по телефону, если вам так удобнее, мы можем
          отвезти покупки в удаленный район с минимальной стоимостью доставки за
          счет использования собственных автопарка и штата курьеров. А еще мы
          поддерживаем фермеров, оперативно развозя вам их свежую натуральную
          продукцию.
        </p>
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
import Carousel from "../components/carousel";
export default {
  components: {
    Carousel,
  },
};
</script>

<style lang="scss">
.about_page {
  &__description {
    padding: 100px 0;
    .section_title {
      text-align: center;
    }
    .title {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 2px;
    }
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
