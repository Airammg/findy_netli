<template>
  <div v-if="hour" class="grey lighten-4 rounded-lg px-2">
    <!-- <pre>{{ hour }} </pre> -->
    <div class="mb-5  rounded-lg">
      <v-row dense>
        <v-col v-for="(time, idx) in selectedHours" :key="idx" class="grey lighten-3 ">
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
    <SparkLine
      :hours="hour"
      :parameter="temperature"
      :titlename="'Temperature'"
      :unit="'°C'"
    />
    <SparkLine
      :hours="hour"
      :parameter="wind"
      :unit="'km/h'"
      :titlename="'Wind'"
    />
    <SparkLine
      :hours="hour"
      :parameter="uv"
      :titlename="'UV'"
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
      hourLabels: ['1:00', '4:00', '7:00', '10:00', '13:00', '16:00', '19:00', '22:00']
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
.hour-label {
  font-size: 10px;
}
</style>
