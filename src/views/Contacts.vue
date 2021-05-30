<template>
  <main class="contacts">
    <div class="container">
      <div class="section_title">Контакты</div>
      <div class="row">
        <div class="col-4 contacts__list">
          <div class="description">
            Мы рады Вашей обратной связи. Нам важно знать Ваше мнение о сервисе,
            чтобы стать еще лучше.
          </div>
          <div class="contacts__list__item">
            <div class="image">
              <font-awesome-icon class="icon" icon="map-marker-alt" />
            </div>
            Россия, Краснодар, Базовская улица, 30
          </div>
          <div class="contacts__list__item">
            <div class="image">
              <font-awesome-icon class="icon" icon="phone-alt" />
            </div>
            +7 (861) 237-22-33
          </div>
          <div class="contacts__list__item">
            <div class="image">
              <font-awesome-icon class="icon" icon="envelope" />
            </div>
            info@grocmart.ru
          </div>
        </div>
        <div class="col-8 map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A475375b0928bc2aab570a682ba7ea4b2aa307569505d7fe6c5612e9ece2d437b&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
          ></iframe>
        </div>
        <form class="col-12 contact__form row" @submit.prevent="sendEmail">
          <div class="contact__form__title col-12">Обратная связь</div>
          <textarea
            name="contact_message"
            class="col-6 contact__form__item"
            cols="30"
            rows="10"
            placeholder="Сообщение"
            required
          ></textarea>
          <div class="col-6">
            <input
              name="contact_name"
              type="text"
              class="contact__form__item"
              placeholder="Ваше имя"
              required
            />
            <the-mask
              :mask="['+7 (###) ###-####']"
              required
              placeholder="Ваш номер"
              class="contact__form__item"
              type="phone"
              name="contact_phone"
            />
            <input
              name="contact_email"
              type="email"
              class="contact__form__item"
              placeholder="Ваша почта"
              required
            />
            <input
              class="contact__form__send"
              type="submit"
              value="Отправить"
            />
            <div class="contact__form__send_success" v-if="isSuccess">
              Успех
            </div>
            <div class="contact__form__send_error" v-if="isError">Ошибка</div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { TheMask } from "vue-the-mask";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      isSuccess: false,
      isError: false,
    };
  },
  components: {
    TheMask,
  },
  methods: {
    sendEmail(e) {
      const self = this;
      emailjs
        .sendForm(
          "service_6ug1j49",
          "template_rrcmlpl",
          e.target,
          "user_asVfLe2pvY0fqO1TJZBTL"
        )
        .then(
          (result) => {
            self.isSuccess = true;
            e.target.reset();
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            self.isError = true;
            e.target.reset();
            console.log("FAILED...", error);
          }
        );
    },
  },
  watch: {
    isSuccess: function () {
      const self = this;
      setTimeout(() => {
        self.isSuccess = false;
      }, 1500);
    },
    isError: function () {
      const self = this;
      setTimeout(() => {
        self.isError = false;
      }, 1500);
    },
  },
};
</script>

<style lang="scss">
.contacts {
  padding: 100px 0;
  .section_title {
    text-align: center;
    margin-bottom: 50px;
  }
  &__list {
    .description {
      margin-bottom: 30px;
    }
    &__item {
      text-align: center;
      margin-bottom: 20px;
      .image {
        width: 50px;
        height: 50px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 22px;
        background: #e52029;
        margin: 0 auto 20px;
      }
    }
  }
  .contact__form {
    position: relative;
    margin-top: 50px;
    &__title {
      font-size: 28px;
      text-transform: uppercase;
      margin-left: -15px;
      margin-bottom: 30px;
      margin: 50px 0px 30px -15px;
    }
    &__item {
      font-size: 14px;
      width: 100%;
      border: none;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      font-family: "Montserrat", sans-serif;
      padding-left: 15px;
      border-radius: 10px;
      &::placeholder {
        letter-spacing: 3px;
      }
      &:focus {
        outline: none;
      }
    }
    &__send {
      background: #e52029;
      border: none;
      height: 50px;
      width: 180px;
      font-size: 16px;
      text-transform: uppercase;
      color: #fff;
      border-radius: 10px;
      margin-left: auto;
      display: block;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
    textarea.contact__form__item {
      min-height: 300px;
      padding-top: 15px;
    }
    input.contact__form__item {
      margin-bottom: 30px;
      height: 50px;
    }
    .contact__form__send_success,
    .contact__form__sendmail_erorr {
      position: absolute;
      bottom: 20px;
      right: 250px;
      font-weight: bold;
      font-size: 18px;
    }
    .contact__form__send_success {
      color: #7fd02c;
    }
    .contact__form__send_erorr {
      color: #e52029;
    }
  }
}
</style>
