<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>
<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'
import '../../../node_modules/echarts/map/js/china.js' // 引入中国地图数据
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '380px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ legend, series, type } = {}) {
      this.chart.setOption({
        title:{
          text:"搜索指数",
          textStyle:{
            fontSize:13,
            color:"#333333",
            fontWeight:"bold"
          },
          bottom:20
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          orient:"horizontal",
          type:"piecewise",
          itemSymbol:"roundRect",
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          min:0,
          max:1000,
          inverse:true
        },
        series: [{
          name: 'demo',
          type: 'map',
          mapType: 'china',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          data: [
            { name: '北京', value: Math.round(Math.random() * 1000) },
            { name: '天津', value: Math.round(Math.random() * 1000) },
            { name: '上海', value: Math.round(Math.random() * 1000) },
            { name: '重庆', value: Math.round(Math.random() * 1000) },
            { name: '河北', value: Math.round(Math.random() * 1000) },
            { name: '河南', value: Math.round(Math.random() * 1000) },
            { name: '云南', value: Math.round(Math.random() * 1000) },
            { name: '辽宁', value: Math.round(Math.random() * 1000) },
            { name: '黑龙江', value: Math.round(Math.random() * 1000) },
            { name: '湖南', value: Math.round(Math.random() * 1000) },
            { name: '安徽', value: Math.round(Math.random() * 1000) },
            { name: '山东', value: Math.round(Math.random() * 1000) },
            { name: '新疆', value: Math.round(Math.random() * 1000) },
            { name: '江苏', value: Math.round(Math.random() * 1000) },
            { name: '浙江', value: Math.round(Math.random() * 1000) },
            { name: '江西', value: Math.round(Math.random() * 1000) },
            { name: '湖北', value: Math.round(Math.random() * 1000) },
            { name: '广西', value: Math.round(Math.random() * 1000) },
            { name: '甘肃', value: Math.round(Math.random() * 1000) },
            { name: '山西', value: Math.round(Math.random() * 1000) },
            { name: '内蒙古', value: Math.round(Math.random() * 1000) },
            { name: '陕西', value: Math.round(Math.random() * 1000) },
            { name: '吉林', value: Math.round(Math.random() * 1000) },
            { name: '福建', value: Math.round(Math.random() * 1000) },
            { name: '贵州', value: Math.round(Math.random() * 1000) },
            { name: '广东', value: Math.round(Math.random() * 1000) },
            { name: '青海', value: Math.round(Math.random() * 1000) },
            { name: '西藏', value: Math.round(Math.random() * 1000) },
            { name: '四川', value: Math.round(Math.random() * 1000) },
            { name: '宁夏', value: Math.round(Math.random() * 1000) },
            { name: '海南', value: Math.round(Math.random() * 1000) },
            { name: '台湾', value: Math.round(Math.random() * 1000) },
            { name: '香港', value: Math.round(Math.random() * 1000) },
            { name: '澳门', value: Math.round(Math.random() * 1000) }
          ]
        }]
      })
    }
  }
}

</script>
