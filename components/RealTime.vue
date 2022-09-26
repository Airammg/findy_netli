<template>
  <v-card class="mx-0 pb-3 px-0 " width="100%" justify-center elevation="5">
    <div v-if="realtime.location">
      <div class="container-fluid">
        <div class="branding-texture mb-3 rounded rounded-b-0 pa-5 location-real-time d-flex align-center" min-height="100px">
          {{ selectedplace }}
        </div>
        <v-row dense>
          <v-col class="pt-2 px-4" xs="3" sm="12" align="center">
            <div class="grey lighten-3 rounded-lg  py-10 icon-bg">
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
              <ToolTip />
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
import ToolTip from '@/components/ToolTip'

export default {

  components: {
    IconWind,
    IconSun,
    IconGust,
    IconHumidity,
    IconUv,
    IconTherm,
    IconPressure,
    ToolTip
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
.location-real-time {
  min-height: 100px;
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
