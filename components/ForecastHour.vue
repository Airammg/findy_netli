<template>
  <div v-if="hour" class="grey lighten-4 rounded-lg px-2">
    <!-- <pre>{{ hour }} </pre> -->
    <div class="mb-5  rounded-lg">
      <v-row dense>
        <v-col v-for="(time, idx) in selectedHours" :key="idx" class="grey lighten-3 px-0 ">
          <div class="d-flex justify-center">
            <img :src="time.condition.icon" alt="" width="35px" height="auto">
          </div>
          <div class="hour-label d-flex justify-center">
            {{ hourLabels[idx] }}
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- <pre>

      {{ rainArray }}
      {{ forecast.hour }}
    </pre> -->
    <div class="switch-wrapper">
      <v-switch v-model="temperatureSwitch" label="Temp" color="#af429a" class=" d-inline-block switcher" />
      <v-switch v-model="windSwitch" label="Wind" color="#af429a" class=" d-inline-block switcher" />
      <v-switch v-model="uvSwitch" label="Uv" color="#af429a" class=" d-inline-block switcher" />
      <v-switch v-model="rainSwitch" label="Rain" color="#af429a" class=" d-inline-block switcher" />
      <v-switch v-model="snowSwitch" label="Snow" color="#af429a" class=" d-inline-block switcher" />
    </div>

    <SparkLine
      v-if="temperatureSwitch"
      :hours="hour"
      :parameter="temperature"
      :titlename="'Temperature'"
      :unit="'°C'"
    />
    <SparkLine
      v-if="windSwitch"
      :hours="hour"
      :parameter="wind"
      :unit="'km/h'"
      :titlename="'Wind'"
    />
    <SparkLine
      v-if="uvSwitch"

      :hours="hour"
      :parameter="uv"
      :titlename="'UV radiation'"
      :unit="''"
    />
    <SparkLine
      v-if="rainSwitch"

      :hours="hour"
      :parameter="rain"
      :titlename="'Rain probability'"
      :unit="'%'"
    />
    <SparkLine
      v-if="snowSwitch"

      :hours="hour"
      :parameter="snow"
      :titlename="'Snow probability'"
      :unit="'%'"
    />
  </div>
</template>

<script>
import SparkLine from '@/components/SparkLine.vue'

export default {
  components: {
    SparkLine
  },
  props: {
    hour: {
      type: Array,
      default () {
        return []
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
      temperature: 'temp_c',
      wind: 'wind_kph',
      uv: 'uv',
      humidity: 'humidity',
      rain: 'chance_of_rain',
      snow: 'chance_of_snow',
      hourLabels: ['1:00', '4:00', '7:00', '10:00', '13:00', '16:00', '19:00', '22:00'],
      temperatureSwitch: true,
      windSwitch: true,
      uvSwitch: true,
      rainSwitch: true,
      snowSwitch: false

    }
  },
  computed: {
    selectedHours () {
      return [this.hour[1], this.hour[4], this.hour[7], this.hour[10], this.hour[13], this.hour[16], this.hour[19], this.hour[22]]
    }
  }
}
</script>

<style scoped>
.switch-wrapper {
  /* border-top: 1px dashed #af429a; */

  /* border-bottom: 1px dashed #af429a; */
  margin-bottom: 10px;
  font-size: 10px;
}

div.switch-wrapper .switcher {
  font-size: 10px !important;
  font-weight: lighter;
}

.hour-label {
  font-size: 0.9rem;
}
</style>
