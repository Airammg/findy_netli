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
        color="rgb(168, 176, 48)"
        class="pa-5"
        @keyup="geosearch () "
      />
      <div>
        <h3>
          You are here:
        </h3>
        <p>{{ selectedPlace }}</p>
        <!-- <pre>{{ geoResults }}</pre> -->
        <div v-for="(location, idx) in geoResults " :key="idx" class="px-5">
          <a class="suggestions" @click="asignCoord(location.y,location.x),showRealTime(), showForecast(), showChoice(location.label)">
            {{ location.label }}
          </a>
          <!-- <div>{{ location.x }}</div>
            <div>{{ location.y }}</div> -->
        </div>
      </div>

      <LeafletMap v-if="forecastResults" :prediction="forecastResults" />
      <LeafletMap v-else />

      <RealTime v-if="forecastResults" :realtime="realTimeResults" class="ma-5" />
      <TabComponent v-if="forecastResults" :forecast="forecastResults.forecast" class="ma-5" />
        <!-- <ForeCast v-if="forecastResults" :forecast="forecastResults.forecast" class="ma-5" /> -->
      </h3>
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
      geoCoords: '',
      selectedPlace: ''
    }
  },
  methods: {
    async showRealTime () {
      if (this.place.length > 0) {
        this.realTimeResults = await API.searchRealTime(this.geoCoords)
        // console.log(`Result of the request ${this.realTimeResults}`)
        this.geoResults = []
        this.place = ''
      }
    },
    async showForecast () {
      if (this.place.length > 0) {
        this.forecastResults = await API.searchForecast(this.geoCoords, '3')
        console.log(`Result of the request ${this.forecastResults}`)
        // console.log(this.forecastResults)
        this.geoResults = []
        this.place = ''
      }
    },
    async geosearch () {
      this.geoResults = await provider.search({ query: this.place })
    },
    asignCoord (lat, long) {
      this.geoCoords = lat.toString() + ',' + long.toString()
      console.log(`Geosearch result: ${this.geoResults[0]}`)
      // console.log(this.geoCoords)
    },
    showChoice (suggestion) {
      this.selectedPlace = suggestion
    }
  }
}
</script>

  <style scoped>
  .suggestions {
    color: #a8b030;
  }
  </style>

<style scoped>
.suggestions {
  color: #a8b030;
}
</style>
