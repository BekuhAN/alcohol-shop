<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="logo">
            <router-link to="/"><img src="../assets/logo.png" /></router-link>
          </div>
          <div class="grafic">
            <div class="grafic__item">Будни: <span>08:00 - 20:00</span></div>
            <div class="grafic__item">Выходные: <span>10:00 - 18:00</span></div>
          </div>
          <div class="social">
            <a class="social__item" href="https://vk.com"
              ><font-awesome-icon class="icon" :icon="['fab', 'vk']"
            /></a>
            <a class="social__item" href="http://facebook.com"
              ><font-awesome-icon class="icon" :icon="['fab', 'facebook-f']"
            /></a>
            <a class="social__item" href="https://twitter.com"
              ><font-awesome-icon class="icon" :icon="['fab', 'twitter']"
            /></a>
            <a class="social__item" href="http://instagram.com"
              ><font-awesome-icon class="icon" :icon="['fab', 'instagram']"
            /></a>
          </div>
        </div>
        <div class="col-4">
          <div class="footer__title">Контакты</div>
          <div class="contact__item">
            <font-awesome-icon class="icon" icon="map-marker-alt" />
            Россия, Краснодар, Базовская улица, 30
          </div>
          <div class="contact__item">
            <font-awesome-icon class="icon" icon="phone-alt" />
            +7 (861) 237-22-33
          </div>
          <div class="contact__item">
            <font-awesome-icon class="icon" icon="envelope" />
            info@grocmart.ru
          </div>
        </div>
        <div class="col-4">
          <div class="footer__title">Рассылка</div>
          <div class="footer__description">
            Подпишитесь на нашу рассылку, чтобы получать еженедельные новости,
            обновления, специальные предложения и эксклюзивные скидки.
          </div>
          <form class="contact_form" @submit.prevent="sendEmail">
            <input
              class="form_email"
              type="email"
              placeholder="Введите ваш email"
              name="user_email"
              required
            />
            <label for="send_mail">
              <font-awesome-icon class="icon" :icon="['far', 'paper-plane']" />
              <input id="send_mail" type="submit" />
            </label>
            <div class="mail_success" v-if="isSuccess">Успех</div>
            <div class="mail_error" v-if="isError">Ошибка</div>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      isSuccess: false,
      isError: false,
    };
  },
  methods: {
    sendEmail(e) {
      const self = this;
      emailjs
        .sendForm(
          "service_8pffxs3",
          "template_5ch3p2a",
          e.target,
          "user_XYpsO08lyi9FfEIXnCKaK"
        )
        .then(
          (result) => {
            self.isSuccess = true;
            e.target.reset;
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            self.isError = true;
            e.target.reset;
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
footer {
  padding: 100px 0;
  .grafic {
    margin: 30px 50px 30px 0;
    border-bottom: 1px solid #ddd;
    padding-bottom: 30px;
    &__item {
      font-weight: bold;
      position: relative;
      span {
        position: absolute;
        font-weight: normal;
        right: 0;
      }
    }
  }
  .social {
    &__item {
      font-size: 24px;
      margin: 0px 15px;
      display: inline-block;
      transition: transform 0.4s ease, color 0.1s ease;
      &:hover {
        color: #e52029;
        transform: rotate(360deg);
      }
    }
  }
  .footer__title {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 30px;
    font-weight: 500;
  }
  .contact__item {
    position: relative;
    padding-left: 50px;
    margin-bottom: 10px;
    .icon {
      position: absolute;
      left: 0;
      color: #e52029;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .footer__description {
    font-size: 14px;
    margin-bottom: 30px;
    color: #777;
  }
  .contact_form {
    display: flex;
    position: relative;
    .mail_success,
    .mail_erorr {
      position: absolute;
      bottom: -50px;
    }
    .mail_success {
      color: #7fd02c;
    }
    .mail_erorr {
      color: #e52029;
    }
    .form_email {
      border: none;
      border-bottom: 1px solid #ddd;
      height: 50px;
      width: 60%;
      &::placeholder {
        letter-spacing: 3px;
      }
      &:focus {
        outline: none;
      }
    }
    label {
      width: 50px;
      height: 50px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e52029;
      border-radius: 50%;
      margin-left: 10px;
      font-size: 20px;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
      input {
        display: none;
      }
    }
  }
}
</style>
