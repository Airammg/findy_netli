<template>
  <v-card class="justify-center mx-0 pb-3" width="100%" elevation="5">

    <div v-if="forecast" class="container-fluid px-3">
      <v-card-title class="main-color location px-0">
        {{ selectedplace }}
      </v-card-title>
      <v-row dense>
        <v-col
          xs="3"
          sm="6"
          md="6"
          lg="2"
          class="pt-5 "
          align="center"
        >
          <div class="grey lighten-3 rounded-lg  py-10 icon-bg">
            <img :src="forecast.day.condition.icon" alt="" width="100px" height="auto">
          </div>
        </v-col>
        <v-col class="" xs="9" sm="6" md="6" lg="2">
          <v-card-subtitle class="font-weight-black pb-0">
            <b> {{ forecast.day.condition.text }} </b>
          </v-card-subtitle>
          <v-card-text center>
            <div class="icon-data d-flex">
              <IconSun />&nbsp;{{ forecast.day.avgtemp_c }} °C
            </div>

            <div class="icon-data d-flex">
              <IconWind />&nbsp; {{ forecast.day.maxwind_kph }} Km/h
            </div>

            <div class="icon-data d-flex">
              <IconRain /> &nbsp;{{ forecast.day.daily_chance_of_rain }} %
            </div>
            <div class="icon-data d-flex">
              <IconUv />&nbsp; {{ forecast.day.uv }}
            </div>
          </v-card-text>
        </v-col>
        <v-col class="" cols="12" xs="12" sm="12" lg="8">
          <ForecastHour :hour="forecast.hour" />
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
import ForecastHour from '@/components/ForecastHour.vue'
import IconWind from '@/components/IconWind.vue'
import IconSun from '@/components/IconSun.vue'
import IconUv from '@/components/IconUv.vue'
import IconRain from '@/components/IconRain.vue'

export default {
  components: {
    ForecastHour,
    IconSun,
    IconWind,
    IconUv,
    IconRain
  },
  props: {
    forecast: {
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
.main-color {
  color: #af429a;
}

.location {
  font-size: 16px;
}

.icon-data {
  font-size: 12px;
  margin: 6px 0;
  text-align: center;
  line-height: 24px;
  border-bottom: 5px solid  #af429970;
  padding-bottom: 3px;
}
</style>
