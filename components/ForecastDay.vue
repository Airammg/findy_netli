<template>
  <v-card class="justify-center mx-0 pb-3" width="100%" elevation="5">
    <!-- <v-card-title>{{ forecast.date }}</v-card-title> -->

    <div v-if="forecast" class="container-fluid">
      <!-- <img :src="forecast.day.condition.icon" alt=""> -->
      <v-row dense>
        <v-col>
          <img :src="forecast.day.condition.icon" alt="" width="150px" height="auto">
          <div class="temperature">
            {{ forecast.day.avgtemp_c }} °C
          </div>
        </v-col>
        <v-col>
          <v-card-subtitle class="font-weight-black">
            {{ forecast.day.condition.text }}
          </v-card-subtitle>
          <v-card-text center>
            <div>Max/min: {{ forecast.day.maxtemp_c }} / {{ forecast.day.mintemp_c }} °C</div>
            <div>Max. wind: {{ forecast.day.maxwind_kph }} Km/h</div>
            <div>Total precip: {{ forecast.day.totalprecip_mm }} mm</div>
            <div>Visibility: {{ forecast.day.avgvis_km }} Km</div>
            <div>Humidity: {{ forecast.day.avghumidity }} %</div>
            <div>UV factor: {{ forecast.day.uv }}</div>
          </v-card-text>
        </v-col>
      </v-row>

      <!-- <h3 class="my-4">
            Forecast by hour
          </h3> -->
      <!-- <div v-for="(hour, idx_h) in fc.hour" :key=" idx_h" class="hour">
            <div class="">
              <h4>Time: {{ idx_h }}:00</h4>
              <img :src="hour.condition.icon" alt="">
              <div>Condition: {{ hour.condition.text }}</div>
              <div>Temperature: {{ hour.temp_c }} °C</div>
              <div>Feels like: {{ hour.feelslike_c }} °C</div>
              <div>Wind: {{ hour.wind_kph }} km/h</div>
              <div>Humidiy: {{ hour.humidity }} %</div>
              <div>Wind direction: {{ hour.wind_dir }}</div>
              <div>Wind degree: {{ hour.wind_degree }}°</div>

              <div>Wind gust: {{ hour.gust_kph }} km/h</div>
              <div>UV factor: {{ hour.uv }}</div>
            </div>
          </div> -->
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    forecast: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style>
div .temperature {
  font-size: 30px;
  text-align: center;
}
</style>
