<template>
  <v-card class="mx-0 pb-3 px-0 " width="100%" justify-center elevation="5">
    <div v-if="realtime.location">
      <div class="container-fluid">
        <v-card-title class="branding-color mb-3 rounded-lg rounded-b-0">
          {{ selectedplace }}
        </v-card-title>
        <v-row dense>
          <v-col class="pt-2 px-4" xs="3" sm="12" align="center">
            <div class="grey lighten-3 rounded-lg  py-10 ">
              <img :src="realtime.current.condition.icon" alt="" width="100px" height="auto">
            </div>
          </v-col>
          <v-col xs="9" sm="12">
            <v-card-subtitle class="font-weight-black pb-0 pt-2">
              <b>{{ realtime.current.condition.text }}</b>
            </v-card-subtitle>
            <v-card-text>
              <div class="icon-data d-flex">
                <IconSun />&nbsp;{{ realtime.current.temp_c }} °C
              </div>
              <div class="icon-data d-flex">
                <IconTherm />&nbsp;{{ realtime.current.feelslike_c }} °C
              </div>
              <div class="icon-data d-flex">
                <IconWind />&nbsp; {{ realtime.current.wind_kph }} Km/h
              </div>
              <div class="icon-data d-flex">
                <IconGust />&nbsp; {{ realtime.current.gust_kph }} Km/h
              </div>
              <div class="icon-data d-flex">
                <IconPressure />&nbsp; {{ realtime.current.pressure_mb }}
              </div>
              <div class="icon-data d-flex">
                <IconHumidity /> &nbsp;{{ realtime.current.humidity }} %
              </div>
              <div class="icon-data d-flex">
                <IconUv />&nbsp; {{ realtime.current.uv }}
              </div>
              <div class="updated">
                {{ realtime.current.last_updated }}
              </div>
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-card>
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
    place: {
      type: String,
      default () {
        return ''
      }
    },
    realtime: {
      type: Object,
      default () {
        return {}
      }
    },
    selectedplace: {
      type: String,
      default () {
        return ''
      }
    }
  }
}
</script>
<style scoped>
.branding-color {
  background-color: #af429a;
  color: #fff;
}

.updated {
  color: #af429a;
}

.icon-data {
  font-size: 12px;
  margin: 6px 0;
  text-align: center;
  line-height: 24px;
  border-bottom: 5px solid #af429970;
  padding-bottom: 3px;
}
</style>
