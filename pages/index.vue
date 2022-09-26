<template>
  <div width="100vw" class="">
    <NuxtLink to="/search">
      <logo-findy class="logo" />
    </NuxtLink>
    <slogan-findy class="slogan" />
    <div
      v-if="randomImage !== ''"
      :style="{backgroundImage:`url(${randomImage})`}"
      class="bg "
    />
  </div>
</template>

<script>
import SloganFindy from '~/components/SloganFindy.vue'
import ImageAPI from '~/services/Unsplash'

export default {
  name: 'HomePage',
  components: {
    // LogoFindy,
    SloganFindy
  },
  data () {
    return {
      randomImage: '',
      randomUrl: '',
      transition: 'demo',
      mode: 'out-in'
    }
  },
  mounted () {
    this.getImage()
  },
  methods: {
    async getImage () {
      this.randomImage = await ImageAPI.getRandomImage()
    }
  }
}
</script>

<style scoped>
.logo {
  width: 320px;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 200px auto;
}

.slogan {
  width: 320px;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 400px auto;
}

.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url("https://cdn.pixabay.com/photo/2016/03/26/13/09/organic-1280537_1280.jpg") no-repeat center center;
  background-size: cover;
  background-color: #af429a;
  z-index: 1;
  filter: blur(3px);
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 1500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
