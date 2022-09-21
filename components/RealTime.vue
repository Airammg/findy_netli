<template>
  <v-card class="mx-0 pa-3" width="100%" justify-center elevation="5">
    <div v-if="realtime.location">
      <div class="container-fluid">
        <v-row dense>
          <v-col align="center" class="pt-5">
            <div>
              <img
                :src="realtime.current.condition.icon"
                alt=""
                width="200px"
                height="auto"
              >
              <div class="temperature">
                {{ realtime.current.temp_c }} <span>°C</span>
              </div>
            </div>

            <!-- <div>Time Zone: {{ realtime.location.tz_id }}</div> -->
          </v-col>
          <v-col>
            <!-- {{ realtime.location.name }} -->
            <v-card-subtitle class="font-weight-black">
              {{ selectedplace }}
              <!-- {{ realtime.location.region }},
                {{ realtime.location.country }} -->
            </v-card-subtitle>
            <v-card-text>
              <b>{{ realtime.current.condition.text }}</b>

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
  .updated {
    color: #a8b030;
  }
</style>
