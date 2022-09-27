<template>
  <v-container
    fluid
    class="text-right"
  >
    <v-row
      class=""
    >
      <v-col
        cols="12"
        class="text-right"
      >
        <v-tooltip
          v-model="show"
          bottom
          close-delay="1000"
          :open-on-hover="true"
        >
          <template #activator="{ on, attrs }">
            <span
              class="btnactivator"
              icon
              v-bind="attrs"
              v-on="on"
            >
              <img src="@/assets/information-outline.png" alt="Info icon" @click="show = !show">
            </span>
          </template>
          <div class="pa-1">
            <div class="icon-data d-flex">
              <IconSun />&nbsp; Temperature in Celsius.
            </div>
            <div class="icon-data d-flex">
              <IconTherm />&nbsp; Feels like in Celsius.
            </div>
            <div class="icon-data d-flex">
              <IconWind />&nbsp;  Average wind in Km/h.
            </div>
            <div class="icon-data d-flex">
              <IconGust />&nbsp;  Gust in Km/h.
            </div>
            <div class="icon-data d-flex">
              <IconPressure />&nbsp; Atmospheric pressure.
            </div>
            <div class="icon-data d-flex">
              <IconHumidity /> &nbsp;
              Humidity percentaje.
            </div>
            <div class="icon-data d-flex">
              <IconUv />&nbsp;
              Uv radiation.
            </div>
            <div class="updated" />
          </div>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IconWind from '@/components/IconWind.vue'
import IconSun from '@/components/IconSun.vue'
import IconGust from '@/components/IconGust.vue'
import IconHumidity from '@/components/IconHumidity.vue'
import IconUv from '@/components/IconUv.vue'
import IconTherm from '@/components/IconTherm.vue'
import IconPressure from '@/components/IconPressure.vue'

export default {
  components: {
    IconWind,
    IconSun,
    IconGust,
    IconHumidity,
    IconUv,
    IconTherm,
    IconPressure
  },
  props: {

  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
img {
  width: 48px;
  height: 48px;
  cursor: pointer;
}

div {
  padding-top: 5px;
}

</style>
