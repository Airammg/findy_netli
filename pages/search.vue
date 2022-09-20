<template>
  <v-row justify="center" class="mt-5">
    <v-col cols="12" sm="8" md="6">
      <v-text-field
        v-model="place"
        label="search for places"
        type="text"
        filled
        rounded
        outlined
        prepend-inner-icon="mdi-magnify"
        @keyup="geosearch () "
      />

      <!-- <pre>{{ geoResults }}</pre> -->
      <div v-for="(location, idx) in geoResults " :key="idx">
        <a class="suggestions" @click="asignCoord(location.y,location.x),showRealTime(), showForecast()">
          {{ location.label }}
        </a>
          <!-- <div>{{ location.x }}</div>
        <div>{{ location.y }}</div> -->
        </a>
      </div>

      <LeafletMap v-if="forecastResults" :prediction="forecastResults" />
      <LeafletMap v-else />

      <RealTime v-if="forecastResults" :realtime="realTimeResults" class="ma-5" />
      <TabComponent v-if="forecastResults" :forecast="forecastResults.forecast" class="ma-5" />
      <!-- <ForeCast v-if="forecastResults" :forecast="forecastResults.forecast" class="ma-5" /> -->
    </v-col>
  </v-row>
</template>

<script>
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import API from '@/services/API'
import RealTime from '~/components/RealTime.vue'
// import ForeCast from '@/components/ForeCast.vue'
import LeafletMap from '@/components/LeafletMap.vue'
import TabComponent from '@/components/TabComponent.vue'
const provider = new OpenStreetMapProvider()

export default {
  name: 'IndexPage',
  components: {
    RealTime,
    // ForeCast,
    LeafletMap,
    TabComponent
  },
  data () {
    return {
      place: '',
      realTimeResults: {},
      forecastResults: null,
      geoResults: [],
      geoCoords: ''
    }
  },
  methods: {
    async showRealTime () {
      if (this.place.length > 0) {
        this.realTimeResults = await API.searchRealTime(this.geoCoords)
        console.log(`Result of the request ${this.realTimeResults}`)
        this.geoResults = []
      }
    },
    async showForecast () {
      if (this.place.length > 0) {
        this.forecastResults = await API.searchForecast(this.geoCoords, '3')
        console.log(`Result of the request ${this.forecastResults}`)
        console.log(this.forecastResults)
        this.geoResults = []
      }
    },
    async geosearch () {
      this.geoResults = await provider.search({ query: this.place })
      console.log(`Geosearch result: ${this.place}`)
    },
    asignCoord (lat, long) {
      this.geoCoords = lat.toString() + ',' + long.toString()
      console.log(this.geoCoords)
    }
  }
}
</script>

<style scoped>
.suggestions {
  color: #a8b030;
}
</style>
