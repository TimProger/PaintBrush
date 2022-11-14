<template>
  <h1>Авторизация</h1>
  <div class="error" v-for="err of errors" :key="err">
    {{ err }}
  </div>
  <div class="error" v-if="password !== '' && email !== '' && !!error">{{error}}</div>
  <form id="signin" @submit.prevent="HandleLogin" autocomplete="off">
    <input type="text" v-model="email" id="email" name="email" placeholder="Почта" />
    <input type="password" v-model="password" id="pass" name="password" placeholder="Пароль" />
    <button type="submit">&#xf0da;</button>
    <p>нет аккаунта? <a @click="$router.push('/auth/registration')">Регистрация</a></p>
  </form>
</template>

<script>
  import { defineComponent } from 'vue'
  import {mapActions, mapState} from 'vuex'
  import {Storage} from "@/utils/storage";
  export default defineComponent({
    name: 'v-auth',
    data: () => ({
      email: "",
      password: "",
      errors: []
    }),
    methods: {
      ...mapActions({
        Login: 'Login',
      }),
      HandleLogin: async function(e) {
        let body = {
          email: this.email,
          password: this.password
        }
        this.Login(body)
          .then((res)=>{
            if (res.status === 200) {
              switch (res.data.message){
                case "Неправильные данные входа":
                  if(!this.errors.includes("Неправильная почта или пароль")){
                    this.errors.push("Неправильная почта или пароль")
                  }
                  break;
                default:
                  Storage.set("id", res.data.data._id);
                  this.$store.commit("LogIn", res.data.data)
                  if(this.$store.state.profile.user){
                    this.$router.replace("/profile");
                  }
              }
            }else{
              this.$store.commit("setError", res.response)
            }
          })
      }
    },
  })
</script>

<style lang="stylus" scoped>
@import '@/App.vars.styl';
@import '@/App.mixins.styl';

.error {
  color $text-error
}

#signin
  width 300px
  border-radius 8px
  position relative

  &::before
    display: block;
    position: relative;
    height: 2px;
    background: $block-sec;
    content: '';
    top: 44px;
    margin-left: 20px;
    z-index: 1;

  & input

    &:first-of-type
      border-top-right-radius 8px
      border-top-left-radius 8px

    &:last-of-type
      border-bottom-right-radius 8px
      border-bottom-left-radius 8px

  & input[type="text"], & input[type="password"], & button[type="submit"]
    background rgb(28, 30, 33)
    box-shadow inset -100px -100px 0 rgb(28, 30, 33)
    color $text-sec

  & input[type="text"], & input[type="password"]
    position relative
    display block
    width 280px
    height 45px
    border 0
    outline 0
    top -2px
    padding 0 0 0 20px
    font-weight 700

    &:focus
      color rgb(255, 255, 255)

  & button[type="submit"]
    display block
    position absolute
    width 52px
    height 52px
    color $text-sec
    border-radius 50px
    outline 0
    z-index 2
    top 19px
    right -24px
    border 6px solid rgb(52, 56, 61)
    font-size 25px
    text-indent 0
    padding-left 9px
    padding-bottom 3px
    text-align center

    &:hover
      color rgb(0, 126, 165)
      text-shadow 0 0 10px rgb(0, 126, 165)
      cursor pointer

  & p
    color $text-main
    padding 0 20px
    font-weight 700
    font-size 12px
    margin 5px 0 0 0

    & a
      color $text-sec
      text-decoration none

      &:hover
        border-bottom 1px solid
        cursor pointer
</style>
