<template>
  <v-app>
    <NuxtLink to="/" class="mx-auto">
      <logo-findy width="250px" class="mx-auto mt-10" />
    </NuxtLink>
    <Nuxt class="ma-2" />
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
