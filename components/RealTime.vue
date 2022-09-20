<template>
  <v-card class="justify-center">
    <v-card-title class="text-center">
      Real Time weather
    </v-card-title>
    <v-card-text>
      <div v-if="realtime.location">
        <div class="container" fluid>
          <div>
            <b>{{ realtime.current.condition.text }}</b>
            <img
              :src="realtime.current.condition.icon"
              alt=""
              class="d-block"
            >
          </div>
          <v-row dense>
            <v-col>
              <h4>Location</h4>
              <div>Time Zone: {{ realtime.location.tz_id }}</div>
              <div>Country: {{ realtime.location.country }}</div>
              <div>Location: {{ realtime.location.name }}</div>
              <!-- <div>Latitud: {{realtime.location.lat}}</div>
                <div>Longitud: {{realtime.location.lon}}</div> -->
            </v-col>
            <v-col>
              <h4>Parameters</h4>
              <div>Temperature: {{ realtime.current.temp_c }} °C</div>
              <div>
                Feels like: {{ realtime.current.feelslike_c }} °C
              </div>
              <div>
                Wind (Km/h): {{ realtime.current.wind_kph }} Km/h
              </div>
              <!-- <div>Wind degree: {{realtime.current.wind_degree}}°</div> -->
              <div>Wind gust: {{ realtime.current.gust_kph }} Km/h</div>
              <div>Wind direction: {{ realtime.current.wind_dir }}</div>
              <div>
                Pressure (Mb): {{ realtime.current.pressure_mb }}
              </div>
              <div>Humidity: {{ realtime.current.humidity }} %</div>
              <div>UV factor: {{ realtime.current.uv }}</div>
            </v-col>
          </v-row>
        </div>
        <div>
          Updated on: <b>{{ realtime.current.last_updated }}</b>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
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
    }
  }
}
</script>
