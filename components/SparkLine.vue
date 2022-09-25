<template>
  <div>
    <v-card class="my-2 px-2" elevation="0">
      <card-subtitle>
        &#x21f5;{{ getMinAndMax }}
        <div class="title-name">
          {{ titlename }}
        </div>
      </card-subtitle>
      <v-sparkline
        class="sparkline"
        :value="selectedParam"
        :gradient="selectedGradient"
        :smooth="radius || false"
        :padding="padding"
        :line-width="width"
        :stroke-linecap="lineCap"
        :gradient-direction="gradientDirection"
        :fill="fill"
        :type="type"
        :auto-line-width="autoLineWidth"
        :labels="hourLabels"
        auto-draw
        color="grey"
      />
    </v-card>
  </div>
</template>

<script>
const gradients = {
  default: ['black'],
  temperature: ['red', 'yellow', 'cyan'],
  wind: ['red', 'blue', 'yellow'],
  uv: ['red', 'orange', 'violet'],
  humidity: ['cyan'],
  rain: ['blue'],
  snow: ['purple']

}

export default {
  props: {
    hours: {
      type: Array,
      default () {
        return []
      }
    },
    parameter: {
      type: String,
      default: ''
    },
    titlename: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    hourtemperature: 0,
    width: 2,
    radius: 10,
    padding: 10,
    lineCap: 'round',
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    hourLabels: ['1:00', '4:00', '7:00', '10:00', '13:00', '16:00', '19:00', '22:00'],
    showLabels: true
  }),
  computed: {
    selectedParam () {
      const positions = []
      for (let i = 1; i <= this.hours.length; i) {
        positions.push(this.hours[i][this.parameter])
        i += 3
      }
      return positions
    },
    getMinAndMax () {
      const min = this.selectedParam.reduce(function (a, b) {
        return parseInt(Math.min(a, b))
      })

      const max = this.selectedParam.reduce(function (a, b) {
        return parseInt(Math.max(a, b))
      })
      return ` ${min} / ${max} ${this.unit} `
    },
    selectedGradient () {
      if (this.parameter === 'temp_c') { return this.gradients.temperature }
      if (this.parameter === 'wind_kph') { return this.gradients.wind }
      if (this.parameter === 'uv') { return this.gradients.uv }
      if (this.parameter === 'humidity') { return this.gradients.humidity }
      if (this.parameter === 'chance_of_rain') { return this.gradients.rain }
      if (this.parameter === 'chance_of_snow') { return this.gradients.snow }

      return this.gradients.default
    }

  }
}
</script>

<style scoped>
  .sparkline {
    font-size: 18px;
  }

  .title-name {
    font-size: 0.9rem;
  }
</style>
