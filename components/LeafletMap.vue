<template>
  <div id="map-wrap" style="height: 30vh;">
    <client-only>
      <l-map
        :zoom="10"
        :center="[prediction.location.lat, prediction.location.lon]"
      >
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <l-marker
          :lat-lng="[
            prediction.location.lat,
            prediction.location.lon,
          ]"
        />
      </l-map>
    </client-only>
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
  }

}
</script>
