<template>
  <ag-charts-vue :options="options"></ag-charts-vue>
</template>

<script>
import { AgChartsVue } from 'ag-charts-vue3';
export default {
  name: "CmGraphic",
  props: [ 'function', 'ckra', 'lkra', 'pkra', 'ckra2' ],
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
            stroke: '#C4E7D4',
            marker: {
              fill: '#C4E7D4',
              stroke: '#C4E7D4',
            },
          },
          {
            data: this.ckra,
            xKey: 'x',
            yKey: 'CKRA',
            yName: 'ЦКРА',
            stroke: '#363030',
            marker: {
              fill: '#363030',
              stroke: '#363030',
            },
          },
          {
            data: this.lkra,
            xKey: 'x',
            yKey: 'LKRA',
            yName: 'ЛКРА',
            stroke: '#998DA0',
            marker: {
              fill: '#998DA0',
              stroke: '#998DA0',
            },
          },
          {
            data: this.pkra,
            xKey: 'x',
            yKey: 'PKRA',
            yName: 'ПКРА',
            stroke: '#63585E',
            marker: {
              fill: '#63585E',
              stroke: '#63585E',
            },
          },
          {
            data: this.ckra2,
            xKey: 'x',
            yKey: 'CKRA2',
            yName: 'ЦКРА 2',
            stroke: '#568A6E',
            marker: {
              fill: '#568A6E',
              stroke: '#568A6E',
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