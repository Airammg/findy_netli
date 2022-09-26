
<template>
  <v-select
    v-model="select"
    class="mt-2"
    :items="items"
    item-text="name"
    item-value="href"
    label="Select a map layer"
    return-object
    outlined
    dense
    color="#af429a"

    @change=" () => $emit('updateMap', select.href)"
  />
</template>

<script>
export default {
  data () {
    return {
      select: { name: 'Findy', href: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png' },
      items: [
        { name: 'Findy', href: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png' },
        { name: 'Topo', href: 'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png' },
        { name: 'Street', href: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' },
        { name: 'Watercolor', href: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png' },
        { name: 'Satelite', href: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
