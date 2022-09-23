<template>
  <v-row justify="center">
    <v-col cols="12" xs="12" sm="12" md="10">
      <v-text-field
        v-model="place"
        label="search for places"
        type="text"
        filled
        rounded
        outlined
        prepend-inner-icon="mdi-magnify"
        color="#af429a"
        class=""
        dense
        @keyup="geosearch () "
      />
      <div>
        <!-- <pre>{{ geoResults }}</pre> -->
        <div class="faded-effect">
          <div v-for="(location, idx) in geoResults " :key="idx" class="px-5">
            <a class="suggestions" @click="asignCoord(location.y,location.x),showRealTime(), showForecast(), showChoice(location.label)">
              {{ location.label }}
            </a>
          </div>
        </div>
      </div>

      <LeafletMap v-if="forecastResults" :prediction="forecastResults" class="map" />
      <LeafletMap v-else class="map" />
    </v-col>
    <v-col cols="12" xs="12" sm="4" md="3">
      <RealTime v-if="forecastResults" :realtime="realTimeResults" :selectedplace="selectedPlace" class="mt-5" />
    </v-col>
    <v-col cols="12" xs="12" sm="8" md="7">
      <TabComponent v-if="forecastResults" :forecast="forecastResults.forecast" :selectedplace="selectedPlace" class="mt-5" />
    </v-col>
  </v-row>
</template>

<script>
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import API from '@/services/API'
import RealTime from '~/components/RealTime.vue'
import LeafletMap from '@/components/LeafletMap.vue'
import TabComponent from '@/components/TabComponent.vue'
// const provider = new OpenStreetMapProvider()

export default {
  name: 'SearchPage',
  components: {
    RealTime,
    LeafletMap,
    TabComponent
  },
  data () {
    return {
      provider: null,
      place: '',
      realTimeResults: {},
      forecastResults: null,
      geoResults: [],
      geoCoords: '',
      selectedPlace: ''
    }
  },
  mounted () {
    this.provider = new OpenStreetMapProvider()
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
      this.geoResults = await this.provider.search({ query: this.place })
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
  color: #af429a;
}

.faded-effect {
  background: linear-gradient(to top, #fff, #af429a);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.map {
  border: 1px solid #af429a;
}
</style>
