<template>
  <v-app class="">
    <NuxtLink to="/" class="mx-auto">
      <logo-findy width="200px" class="mx-auto mt-10" />
    </NuxtLink>
    <Nuxt />
  </v-app>
</template>

<script>
import LogoFindy from '~/components/LogoFindy.vue'

export default {
  name: 'DefaultLayout',
  components: {
    LogoFindy
  },
  data () {
    return {}
  }
}
</script>
