<template>
  <v-card class="justify-center">
    <v-card-title>Forecast weather</v-card-title>
    <v-card-text>
      <div v-if="forecast">
        <div v-for="(fc, idx) in forecast.forecastday" :key="idx">
          <h3>{{ fc.date }}</h3>
          <div>Condition: {{ fc.day.condition.text }}</div>
          <img :src="fc.day.condition.icon" alt="">

          <div>Max. temp: {{ fc.day.maxtemp_c }} °C</div>
          <div>Min. temp: {{ fc.day.mintemp_c }} °C</div>
          <div>Average temp: {{ fc.day.avgtemp_c }} °C</div>
          <div>Max. wind: {{ fc.day.maxwind_kph }} Km/h</div>
          <div>Total precip: {{ fc.day.totalprecip_mm }} mm</div>
          <div>Average visibility: {{ fc.day.avgvis_km }} Km</div>
          <div>Average humidity: {{ fc.day.avghumidity }} %</div>
          <div>UV factor: {{ fc.day.uv }}</div>

          <h3 class="my-4">
            Forecast by hour
          </h3>
          <div v-for="(hour, idx_h) in fc.hour" :key=" idx_h" class="hour">
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
          </div>
        </div>
      </div>
    </v-card-text>
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
