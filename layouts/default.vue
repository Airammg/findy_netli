<template>
  <v-app>
    <Nuxt class="ma-2" />
  </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout'
}
</script>

<style>
* {
  font-family: Exo, sans-serif;
}

.branding-texture {
  background-color: #af429a;
  color: #fff;
}

.icon-bg {
  background: linear-gradient(180deg, #dcdcdce3, rgb(227 227 227 / 74.6%)), url("https://images.pexels.com/photos/7598536/pexels-photo-7598536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
}

.regularlogo {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.logo-wrapper {
  position: relative;
}

</style>
