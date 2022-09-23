<template>
  <div>
    <pre>

      <!-- {{ hours[0] }} -->
      <!-- {{ selectedGradient }} -->
    </pre>
    <card-subtitle>
      &#x21f5;{{ getMinAndMax }}
      <div class="title-name">
        {{ titlename }}
      </div>
    </card-subtitle>
    <v-sparkline
      :value="selectedParam"
      :gradient="gradients[selectedGradient]"
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
    />,
  </div>
</template>

<script>
const gradients = {
  temperature: ['red', 'yellow', 'cyan'],
  wind: ['red', 'blue', 'yellow'],
  uv: ['red', 'orange', 'violet']

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
    padding: 8,
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
      const gradientName = this.titlename.toLowerCase()
      return gradientName
    }
  }
}
</script>

<style scoped>
  .title-name {
    font-size: 12px;
  }
</style>
