<template>
  <Chart
      :size="{ width: 500, height: 400 }"
      :t
      :data="data"
      :margin="margin"
      :direction="direction"
      :axis="axis"
  >

    <template #layers>
      <Grid strokeDasharray="2,2" />
      <Line :dataKeys="['name', 'pl']" />
      <Layer :dataKeys="['name', 'pl']" />
<!--      <Line :dataKeys="['name', 'avg']" :lineStyle="{ stroke: 'red' }" type="step" />-->
    </template>

    <template #widgets>
      <Tooltip
          borderColor="#48CAE4"
          :config="{
          name: { hide: true },
          pl: { color: '#0077b6' },
          avg: { label: 'averange', color: 'red' },
          inc: { hide: true }
        }"
      />
    </template>

  </Chart>
</template>

<script>
import { ref } from 'vue'
import { Chart, Grid, Line, Tooltip, Layer } from 'vue3-charts'
// import { plByMonth } from '@/data'

export default {
  name: "CmGraphic",
  components: { Chart, Grid, Line, Tooltip, Layer },
  setup() {
    const data = ref([
      { name: 10, pl: 1000, avg: 500, inc: 300 },
      { name: 12, pl: 2000, avg: 900, inc: 400 },
      { name: 20, pl: 400, avg: 400, inc: 500 },
      { name: 28, pl: 3100, avg: 1300, inc: 700 },
      { name: 30, pl: 200, avg: 100, inc: 200 },
      { name: 40, pl: 600, avg: 400, inc: 300 },
      { name: 55, pl: 500, avg: 90, inc: 100 }
    ])
    const axis = ref({
      primary: {
        type: 'band',
        format: (val) => {
          // if (val === 'Feb') {
          //   return '😜'
          // }
          return val
        }
      },
      secondary: {
        domain: ['dataMin', 'dataMax + 100'],
        type: 'linear',
        ticks: 8
      }
    })
    const direction = ref('horizontal')
    const margin = ref({
      left: 20,
      top: 20,
      right: 20,
      bottom: 0
    })

    return { data, direction, margin, axis }
  }
}
</script>

<style scoped>

</style>