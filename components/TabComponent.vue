<template>
  <div id="app" width="100%">
    <v-app id="inspire">
      <v-card class="justify-center" width="100%" elevation="5">
        <!-- <v-card-title background-color="#a8b030">
          Three Days Forecast
        </v-card-title> -->
        <v-tabs
          v-model="tab"
          background-color="#a8b030"
          height="100px"
          dark
          centered
          icons-and-text
          active
        >
          <v-tabs-slider />

          <v-tab href="#tab-1">
            <div>{{ forecast.forecastday[0].date }}</div>
            <div>{{ getWeekDay(forecast.forecastday[0].date) }}</div>
            <v-img :src="forecast.forecastday[0].day.condition.icon" alt="" />
          </v-tab>

          <v-tab href="#tab-2">
            <div>{{ forecast.forecastday[1].date }}</div>
            <div>{{ getWeekDay(forecast.forecastday[1].date) }}</div>
            <v-img :src="forecast.forecastday[1].day.condition.icon" alt="" />
          </v-tab>

          <v-tab href="#tab-3">
            <div>{{ forecast.forecastday[2].date }}</div>
            <div>{{ getWeekDay(forecast.forecastday[2].date) }}</div>
            <v-img :src="forecast.forecastday[2].day.condition.icon" alt="" />
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <ForecastDay
              :forecast="forecast.forecastday[0]"
              :selectedplace="selectedplace"
            />
          </v-tab-item>
          <v-tab-item value="tab-2">
            <ForecastDay
              :forecast="forecast.forecastday[1]"
              :selectedplace="selectedplace"
            />
          </v-tab-item>
          <v-tab-item value="tab-3">
            <ForecastDay
              :forecast="forecast.forecastday[2]"
              :selectedplace="selectedplace"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import ForecastDay from './ForecastDay.vue'
export default {
  components: {
    ForecastDay
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
  },
  data () {
    return {
      tab: null,
      weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  },
  methods: {
    getWeekDay (date) {
      return this.weekdays[new Date(date).getDay()]
    }
  }

}
</script>
