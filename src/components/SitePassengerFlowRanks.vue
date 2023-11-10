<script setup>
import {ref, onMounted} from "vue";
import * as echarts from "echarts";

let chartDom = ref();
onMounted(() => {
  initChart();
});
const initChart = () => {
  var myChart = echarts.init(chartDom.value);
  var option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
      "enabled": false
    },
    "color": [
      "#84a729",
      "#663d74",
      "#5470c6",
      "#91cc75",
      "#fac858",
      "#ee6666",
      "#73c0de",
      "#3ba272",
      "#fc8452",
      "#9a60b4",
      "#ea7ccc"
    ],
    "series": [
      {
        "type": "bar",
        "name": "\u4e58\u5ba2\u5165\u7ad9\u6d41\u91cf",
        "legendHoverLink": true,
        "data": [
          69168,
          64903,
          60094,
          103690,
          48969,
          46635,
          49240,
          47298,
          44215
        ],
        "realtimeSort": false,
        "showBackground": false,
        "stack": "stack1",
        "stackStrategy": "samesign",
        "cursor": "pointer",
        "barMinHeight": 0,
        "barCategoryGap": "20%",
        "barGap": "30%",
        "large": false,
        "largeThreshold": 400,
        "seriesLayoutBy": "column",
        "datasetIndex": 0,
        "clip": true,
        "zlevel": 0,
        "z": 2,
        "label": {
          "show": false,
          "margin": 8
        },
        "rippleEffect": {
          "show": true,
          "brushType": "stroke",
          "scale": 2.5,
          "period": 4
        }
      },
      {
        "type": "bar",
        "name": "\u4e58\u5ba2\u51fa\u7ad9\u6d41\u91cf",
        "legendHoverLink": true,
        "data": [
          72446,
          63635,
          67885,
          104714,
          51309,
          49774,
          46081,
          45410,
          48158
        ],
        "realtimeSort": false,
        "showBackground": false,
        "stack": "stack1",
        "stackStrategy": "samesign",
        "cursor": "pointer",
        "barMinHeight": 0,
        "barCategoryGap": "20%",
        "barGap": "30%",
        "large": false,
        "largeThreshold": 400,
        "seriesLayoutBy": "column",
        "datasetIndex": 0,
        "clip": true,
        "zlevel": 0,
        "z": 2,
        "label": {
          "show": false,
          "margin": 8
        },
        "rippleEffect": {
          "show": true,
          "brushType": "stroke",
          "scale": 2.5,
          "period": 4
        }
      }
    ],
    "legend": [
      {
        "data": [
          "\u4e58\u5ba2\u5165\u7ad9\u6d41\u91cf",
          "\u4e58\u5ba2\u51fa\u7ad9\u6d41\u91cf"
        ],
        "selected": {
          "\u4e58\u5ba2\u5165\u7ad9\u6d41\u91cf": true,
          "\u4e58\u5ba2\u51fa\u7ad9\u6d41\u91cf": true
        },
        "show": true,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14,
        "textStyle": {
          "color": "#ffffff"
        },
        "backgroundColor": "transparent",
        "borderColor": "#ccc",
        "borderWidth": 1,
        "borderRadius": 0,
        "pageButtonItemGap": 5,
        "pageButtonPosition": "end",
        "pageFormatter": "{current}/{total}",
        "pageIconColor": "#2f4554",
        "pageIconInactiveColor": "#aaa",
        "pageIconSize": 15,
        "animationDurationUpdate": 800,
        "selector": false,
        "selectorPosition": "auto",
        "selectorItemGap": 7,
        "selectorButtonGap": 10
      }
    ],
    "tooltip": {
      "show": true,
      "trigger": "axis",
      "triggerOn": "mousemove|click",
      "axisPointer": {
        "type": "cross"
      },
      "showContent": true,
      "alwaysShowContent": false,
      "showDelay": 0,
      "hideDelay": 100,
      "enterable": false,
      "confine": false,
      "appendToBody": false,
      "transitionDuration": 0.4,
      "textStyle": {
        "fontSize": 14
      },
      "borderWidth": 0,
      "padding": 5,
      "order": "seriesAsc"
    },
    "xAxis": [
      {
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "axisLabel": {
          "show": true,
          "rotate": 40,
          "margin": 8
        },
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "minInterval": 0,
        "splitLine": {
          "show": true,
          "lineStyle": {
            "show": true,
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
          }
        },
        "data": [
          "\u9646\u5bb6\u5634",
          "\u5f90\u5bb6\u6c47",
          "\u4eba\u6c11\u5e7f\u573a",
          "\u4e0a\u6d77\u706b\u8f66\u7ad9",
          "\u4e16\u7eaa\u5927\u9053",
          "\u9759\u5b89\u5bfa",
          "\u83b2\u82b1\u8def",
          "\u6dde\u8679\u8def",
          "\u5357\u4eac\u897f\u8def"
        ]
      }
    ],
    "yAxis": [
      {
        "show": true,
        "scale": false,
        "nameLocation": "end",
        "nameGap": 15,
        "gridIndex": 0,
        "inverse": false,
        "offset": 0,
        "splitNumber": 5,
        "minInterval": 0,
        "splitLine": {
          "show": true,
          "lineStyle": {
            "show": true,
            "width": 1,
            "opacity": 1,
            "curveness": 0,
            "type": "solid"
          }
        }
      }
    ],
    "title": [
      {
        "show": true,
        "target": "blank",
        "subtarget": "blank",
        "padding": 5,
        "itemGap": 10,
        "textAlign": "auto",
        "textVerticalAlign": "auto",
        "triggerEvent": false
      }
    ]
  };

  option && myChart.setOption(option);
}
</script>

<template>
  <div ref="chartDom" style="width: 600px;height: 400px"></div>
</template>

<style scoped>

</style>