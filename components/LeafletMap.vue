<template>
  <div id="map-wrap" style="height: 30vh;">
    <client-only>
      <l-map :zoom="10" :center="[prediction.location.lat, prediction.location.lon]">
        <l-tile-layer :url="selectedMap" />

        <l-marker
          :lat-lng="[
            prediction.location.lat,
            prediction.location.lon,
          ]"
        />
      </l-map>
    </client-only>
    <SelectMap @updateMap="updateMap" />
  </div>
</template>

<script>
import SelectMap from '@/components/SelectMap'
export default {
  components: {
    SelectMap
  },
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
      map: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
    }
  },
  computed: {
    selectedMap () {
      return this.map
    }
  },
  methods: {
    updateMap (params) {
      this.map = params
    }
  }
}

</script>
