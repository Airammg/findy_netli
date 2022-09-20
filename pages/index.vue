<template>
  <div width="300px" class="mx-auto mt-1">
    <!-- <logo-findy /> -->
    <slogan-findy />
  </div>
</template>

<script>
import SloganFindy from '~/components/SloganFindy.vue'

export default {
  name: 'HomePage',
  components: {
    // LogoFindy,
    SloganFindy
  },
  data () {
    return {

    }
  }
}
</script>
