<template>
  <ag-charts-vue :options="options"></ag-charts-vue>
</template>

<script>
import { AgChartsVue } from 'ag-charts-vue3';
export default {
  name: "CmGraphic",
  props: [ 'function', 'ckra', 'lkra', 'pkra' ],
  components: {  'ag-charts-vue': AgChartsVue, },
  computed: {
    options() {
      return {
        autoSize: true,
        series: [
          {
            data: this.ckra,
            xKey: 'x',
            yKey: 'y',
            yName: 'ƒ(x)',
            stroke: '#ac4ac2',
            marker: {
              fill: '#ac4ac2',
              stroke: '#77118c',
            },
          },
          {
            data: this.ckra,
            xKey: 'x',
            yKey: 'CKRA',
            yName: 'ЦКРА',
            stroke: '#8bc24a',
            marker: {
              fill: '#8bc24a',
              stroke: '#658d36',
            },
          },
          {
            data: this.lkra,
            xKey: 'x',
            yKey: 'LKRA',
            yName: 'ЛКРА',
            stroke: '#14e6f3',
            marker: {
              fill: '#14e6f3',
              stroke: '#027980',
            },
          },
          {
            data: this.pkra,
            xKey: 'x',
            yKey: 'PKRA',
            yName: 'ПКРА',
            stroke: '#c28a4a',
            marker: {
              fill: '#c28a4a',
              stroke: '#c06b02',
            },
          },
        ],
        axes: [
          {
            type: 'number',
            position: 'bottom',
          },
          {
            type: 'number',
            position: 'left',
          },
        ],
        legend: {
          position: 'top',
        },
      };
    }
 }
}
</script>

<style scoped>

</style>