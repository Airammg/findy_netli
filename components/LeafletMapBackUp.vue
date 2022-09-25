<template>
  <div id="map-wrap" style="height: 30vh;">
    <client-only>
      <l-map :zoom="10" :center="[prediction.location.lat, prediction.location.lon]">
        <!-- topo map -->
        <l-tile-layer
          v-if="topo"
          url="http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        />

        <!-- watercolor map -->
        <l-tile-layer
          v-if="watercolor"
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
        />

        <!-- prettier than deafult map  -->
        <!-- <l-tile-layer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
            /> -->

        <!-- satelite view -->
        <l-tile-layer
          v-if="satelite"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <!-- Open street map-->

        <l-tile-layer v-if="street" url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

        <!-- default map -->
        <l-tile-layer v-else url="//tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />

        <l-marker
          :lat-lng="[
            prediction.location.lat,
            prediction.location.lon,
          ]"
        />
      </l-map>
    </client-only>
    <v-switch v-model="topo" label="topo" @click="switchControler ()" />
    <v-switch v-model="satelite" label="satelite" @click="switchControler ()" />

    <v-switch v-model="street" label="street" @click="switchControler ()" />

    <v-switch v-model="watercolor" label="watercolor" @click="switchControler ()" />
  </div>
</template>

<script>
export default {
  props: {
    prediction: {
      type: Object,
      default () {
        return {
          location: {
            lat: '27.9813108',
            lon: '-15.4242731'
          }
        }
      }
    }
  },
  data () {
    return {
      topo: false,
      street: false,
      watercolor: false,
      satelite: false
    }
  },
  methods: {
    switchControler (option) {
      // console.log(option)
      // this.topo = false
      // this.street = false
      // this.watercolor = false
      // this.satelite = false
    }
  }

}
</script>
