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
      "#206864",
      "#c67915",
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
        "name": "\u4f18\u60e0",
        "legendHoverLink": true,
        "data": [
          360305.0,
          381329.2,
          204337.0,
          153876.0,
          38759.0,
          86019.0,
          198852.0,
          226945.40000000002,
          279378.0,
          135509.0,
          170080.0,
          38593.7,
          36723.0,
          44372.0
        ],
        "realtimeSort": false,
        "showBackground": false,
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
        "markLine": {
          "silent": false,
          "precision": 2,
          "label": {
            "show": false,
            "margin": 8
          },
          "data": [
            {
              "name": "\u6700\u5c0f\u503c",
              "type": "min"
            },
            {
              "name": "\u6700\u5927\u503c",
              "type": "max"
            },
            {
              "name": "\u5e73\u5747\u503c",
              "type": "average"
            }
          ]
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
        "name": "\u975e\u4f18\u60e0",
        "legendHoverLink": true,
        "data": [
          2248461.6,
          2656071.0,
          1421637.0,
          982009.0,
          244706.0,
          711347.0,
          1361037.0,
          1683589.0,
          1596069.0,
          1087428.0,
          1079727.0,
          281666.0,
          283630.0,
          215139.0
        ],
        "realtimeSort": false,
        "showBackground": false,
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
        "markLine": {
          "silent": false,
          "precision": 2,
          "label": {
            "show": false,
            "margin": 8
          },
          "data": [
            {
              "name": "\u6700\u5c0f\u503c",
              "type": "min"
            },
            {
              "name": "\u6700\u5927\u503c",
              "type": "max"
            },
            {
              "name": "\u5e73\u5747\u503c",
              "type": "average"
            }
          ]
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
          "\u4f18\u60e0",
          "\u975e\u4f18\u60e0"
        ],
        "selected": {
          "\u4f18\u60e0": true,
          "\u975e\u4f18\u60e0": true
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
      "trigger": "item",
      "triggerOn": "mousemove|click",
      "axisPointer": {
        "type": "line"
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
          "1\u53f7\u7ebf",
          "2\u53f7\u7ebf",
          "3\u53f7\u7ebf",
          "4\u53f7\u7ebf",
          "5\u53f7\u7ebf",
          "6\u53f7\u7ebf",
          "7\u53f7\u7ebf",
          "8\u53f7\u7ebf",
          "9\u53f7\u7ebf",
          "10\u53f7\u7ebf",
          "11\u53f7\u7ebf",
          "12\u53f7\u7ebf",
          "13\u53f7\u7ebf",
          "16\u53f7\u7ebf"
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
    ],
    "visualMap": [
      {
        "show": false,
        "type": "continuous",
        "min": 36723,
        "max": 381329,
        "inRange": {
          "color": [
            "#88bfb8",
            "#206864"
          ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "seriesIndex": 0,
        "hoverLink": true,
        "orient": "vertical",
        "left": "90%",
        "top": "60%",
        "padding": 5,
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140,
        "borderWidth": 0
      },
      {
        "show": false,
        "type": "continuous",
        "min": 215139,
        "max": 2656071,
        "inRange": {
          "color": [
            "#fedc5e",
            "#c67915"
          ]
        },
        "calculable": true,
        "inverse": false,
        "splitNumber": 5,
        "seriesIndex": 1,
        "hoverLink": true,
        "orient": "vertical",
        "left": "90%",
        "top": "20%",
        "padding": 5,
        "showLabel": true,
        "itemWidth": 20,
        "itemHeight": 140,
        "borderWidth": 0
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