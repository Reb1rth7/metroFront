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
        "type": "wordCloud",
        "name": "\u70ed\u70b9\u5206\u6790",
        "shape": "circle",
        "rotationRange": [
          -90,
          90
        ],
        "rotationStep": 45,
        "girdSize": 20,
        "sizeRange": [
          6,
          66
        ],
        "data": [
          {
            "name": "\u9646\u5bb6\u5634",
            "value": 141614,
            "textStyle": {
              "color": "rgb(67,150,97)"
            }
          },
          {
            "name": "\u5f90\u5bb6\u6c47",
            "value": 178881,
            "textStyle": {
              "color": "rgb(3,96,101)"
            }
          },
          {
            "name": "\u4eba\u6c11\u5e7f\u573a",
            "value": 218749,
            "textStyle": {
              "color": "rgb(68,87,94)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u706b\u8f66\u7ad9",
            "value": 208404,
            "textStyle": {
              "color": "rgb(28,18,118)"
            }
          },
          {
            "name": "\u4e16\u7eaa\u5927\u9053",
            "value": 100278,
            "textStyle": {
              "color": "rgb(91,131,101)"
            }
          },
          {
            "name": "\u9759\u5b89\u5bfa",
            "value": 150773,
            "textStyle": {
              "color": "rgb(22,30,13)"
            }
          },
          {
            "name": "\u83b2\u82b1\u8def",
            "value": 95321,
            "textStyle": {
              "color": "rgb(3,67,61)"
            }
          },
          {
            "name": "\u6dde\u8679\u8def",
            "value": 92708,
            "textStyle": {
              "color": "rgb(37,128,126)"
            }
          },
          {
            "name": "\u5357\u4eac\u897f\u8def",
            "value": 92373,
            "textStyle": {
              "color": "rgb(10,10,84)"
            }
          },
          {
            "name": "\u5a04\u5c71\u5173\u8def",
            "value": 87224,
            "textStyle": {
              "color": "rgb(77,47,105)"
            }
          },
          {
            "name": "\u6f15\u6cb3\u6cfe\u5f00\u53d1\u533a",
            "value": 86045,
            "textStyle": {
              "color": "rgb(136,31,67)"
            }
          },
          {
            "name": "\u4e2d\u5c71\u516c\u56ed",
            "value": 139744,
            "textStyle": {
              "color": "rgb(35,124,1)"
            }
          },
          {
            "name": "\u9655\u897f\u5357\u8def",
            "value": 132975,
            "textStyle": {
              "color": "rgb(80,85,134)"
            }
          },
          {
            "name": "\u6842\u6797\u8def",
            "value": 78376,
            "textStyle": {
              "color": "rgb(33,36,122)"
            }
          },
          {
            "name": "\u5f90\u6cfe\u4e1c",
            "value": 77321,
            "textStyle": {
              "color": "rgb(78,59,125)"
            }
          },
          {
            "name": "\u5357\u4eac\u4e1c\u8def",
            "value": 134637,
            "textStyle": {
              "color": "rgb(67,100,147)"
            }
          },
          {
            "name": "\u8398\u5e84",
            "value": 72895,
            "textStyle": {
              "color": "rgb(33,146,119)"
            }
          },
          {
            "name": "\u5f20\u6c5f\u9ad8\u79d1",
            "value": 72813,
            "textStyle": {
              "color": "rgb(92,29,44)"
            }
          },
          {
            "name": "\u91d1\u79d1\u8def",
            "value": 72030,
            "textStyle": {
              "color": "rgb(50,49,48)"
            }
          },
          {
            "name": "\u4e1c\u660c\u8def",
            "value": 71222,
            "textStyle": {
              "color": "rgb(51,98,119)"
            }
          },
          {
            "name": "\u5e7f\u5170\u8def",
            "value": 68683,
            "textStyle": {
              "color": "rgb(128,38,133)"
            }
          },
          {
            "name": "\u4e03\u5b9d",
            "value": 67873,
            "textStyle": {
              "color": "rgb(37,36,111)"
            }
          },
          {
            "name": "\u4e5d\u4ead",
            "value": 66779,
            "textStyle": {
              "color": "rgb(103,109,120)"
            }
          },
          {
            "name": "\u6253\u6d66\u6865",
            "value": 66697,
            "textStyle": {
              "color": "rgb(105,102,6)"
            }
          },
          {
            "name": "\u9ec4\u9642\u5357\u8def",
            "value": 65046,
            "textStyle": {
              "color": "rgb(36,159,74)"
            }
          },
          {
            "name": "\u957f\u5bff\u8def",
            "value": 62148,
            "textStyle": {
              "color": "rgb(138,8,142)"
            }
          },
          {
            "name": "\u9f99\u9633\u8def",
            "value": 94275,
            "textStyle": {
              "color": "rgb(4,86,120)"
            }
          },
          {
            "name": "\u8679\u6865\u706b\u8f66\u7ad9",
            "value": 56750,
            "textStyle": {
              "color": "rgb(91,116,99)"
            }
          },
          {
            "name": "\u6d66\u7535\u8def",
            "value": 86949,
            "textStyle": {
              "color": "rgb(43,34,6)"
            }
          },
          {
            "name": "\u5f6d\u6d66\u65b0\u6751",
            "value": 54988,
            "textStyle": {
              "color": "rgb(124,102,150)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u5357\u7ad9",
            "value": 93698,
            "textStyle": {
              "color": "rgb(107,3,66)"
            }
          },
          {
            "name": "\u6f15\u5b9d\u8def",
            "value": 54363,
            "textStyle": {
              "color": "rgb(11,124,106)"
            }
          },
          {
            "name": "\u6c88\u675c\u516c\u8def",
            "value": 53128,
            "textStyle": {
              "color": "rgb(47,21,39)"
            }
          },
          {
            "name": "\u5ef6\u5b89\u897f\u8def",
            "value": 52549,
            "textStyle": {
              "color": "rgb(121,27,130)"
            }
          },
          {
            "name": "\u8087\u5609\u6d5c\u8def",
            "value": 52281,
            "textStyle": {
              "color": "rgb(84,130,30)"
            }
          },
          {
            "name": "\u901a\u6cb3\u65b0\u6751",
            "value": 52240,
            "textStyle": {
              "color": "rgb(116,62,45)"
            }
          },
          {
            "name": "\u5546\u57ce\u8def",
            "value": 51694,
            "textStyle": {
              "color": "rgb(90,120,62)"
            }
          },
          {
            "name": "\u5927\u4e16\u754c",
            "value": 51129,
            "textStyle": {
              "color": "rgb(128,1,2)"
            }
          },
          {
            "name": "\u5ef6\u957f\u8def",
            "value": 50402,
            "textStyle": {
              "color": "rgb(67,48,22)"
            }
          },
          {
            "name": "\u897f\u85cf\u5357\u8def",
            "value": 49841,
            "textStyle": {
              "color": "rgb(78,25,96)"
            }
          },
          {
            "name": "\u6c5f\u82cf\u8def",
            "value": 80871,
            "textStyle": {
              "color": "rgb(41,158,132)"
            }
          },
          {
            "name": "\u5927\u8fde\u8def",
            "value": 48498,
            "textStyle": {
              "color": "rgb(124,122,89)"
            }
          },
          {
            "name": "\u987e\u6751\u516c\u56ed",
            "value": 48468,
            "textStyle": {
              "color": "rgb(14,36,44)"
            }
          },
          {
            "name": "\u66f9\u6768\u8def",
            "value": 84539,
            "textStyle": {
              "color": "rgb(89,0,10)"
            }
          },
          {
            "name": "\u5609\u5584\u8def",
            "value": 47836,
            "textStyle": {
              "color": "rgb(157,152,120)"
            }
          },
          {
            "name": "\u9526\u6c5f\u4e50\u56ed",
            "value": 45003,
            "textStyle": {
              "color": "rgb(3,152,157)"
            }
          },
          {
            "name": "\u5357\u7fd4",
            "value": 44537,
            "textStyle": {
              "color": "rgb(51,155,40)"
            }
          },
          {
            "name": "\u677e\u6c5f\u5927\u5b66\u57ce",
            "value": 43844,
            "textStyle": {
              "color": "rgb(11,108,100)"
            }
          },
          {
            "name": "\u660c\u5e73\u8def",
            "value": 42705,
            "textStyle": {
              "color": "rgb(123,70,135)"
            }
          },
          {
            "name": "\u6d66\u4e1c\u5927\u9053",
            "value": 42378,
            "textStyle": {
              "color": "rgb(115,46,3)"
            }
          },
          {
            "name": "\u9646\u5bb6\u6d5c\u8def",
            "value": 41054,
            "textStyle": {
              "color": "rgb(101,117,29)"
            }
          },
          {
            "name": "\u8c6b\u56ed",
            "value": 40907,
            "textStyle": {
              "color": "rgb(57,11,23)"
            }
          },
          {
            "name": "\u5317\u65b0\u6cfe",
            "value": 40705,
            "textStyle": {
              "color": "rgb(158,160,33)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u4f53\u80b2\u573a",
            "value": 40695,
            "textStyle": {
              "color": "rgb(145,40,160)"
            }
          },
          {
            "name": "\u5408\u5ddd\u8def",
            "value": 40565,
            "textStyle": {
              "color": "rgb(122,110,93)"
            }
          },
          {
            "name": "\u5858\u6865",
            "value": 40485,
            "textStyle": {
              "color": "rgb(115,31,98)"
            }
          },
          {
            "name": "\u5171\u5eb7\u8def",
            "value": 40352,
            "textStyle": {
              "color": "rgb(157,0,70)"
            }
          },
          {
            "name": "\u5929\u6f7c\u8def",
            "value": 39377,
            "textStyle": {
              "color": "rgb(13,46,70)"
            }
          },
          {
            "name": "\u8001\u897f\u95e8",
            "value": 39318,
            "textStyle": {
              "color": "rgb(160,7,146)"
            }
          },
          {
            "name": "\u5171\u5bcc\u65b0\u6751",
            "value": 39145,
            "textStyle": {
              "color": "rgb(19,46,107)"
            }
          },
          {
            "name": "\u6768\u9ad8\u4e2d\u8def",
            "value": 38988,
            "textStyle": {
              "color": "rgb(147,136,89)"
            }
          },
          {
            "name": "\u9547\u576a\u8def",
            "value": 55870,
            "textStyle": {
              "color": "rgb(18,107,71)"
            }
          },
          {
            "name": "\u6c5f\u6e7e\u9547",
            "value": 38626,
            "textStyle": {
              "color": "rgb(139,100,147)"
            }
          },
          {
            "name": "\u4ea4\u901a\u5927\u5b66",
            "value": 38388,
            "textStyle": {
              "color": "rgb(72,100,82)"
            }
          },
          {
            "name": "\u8000\u534e\u8def",
            "value": 38105,
            "textStyle": {
              "color": "rgb(45,88,76)"
            }
          },
          {
            "name": "\u8679\u53e3\u8db3\u7403\u573a",
            "value": 57060,
            "textStyle": {
              "color": "rgb(141,158,76)"
            }
          },
          {
            "name": "\u4f58\u5c71",
            "value": 37446,
            "textStyle": {
              "color": "rgb(50,102,111)"
            }
          },
          {
            "name": "\u6cd7\u6cfe",
            "value": 37417,
            "textStyle": {
              "color": "rgb(115,82,4)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u9a6c\u620f\u57ce",
            "value": 37375,
            "textStyle": {
              "color": "rgb(105,124,49)"
            }
          },
          {
            "name": "\u5a01\u5b81\u8def",
            "value": 37302,
            "textStyle": {
              "color": "rgb(125,139,84)"
            }
          },
          {
            "name": "\u5927\u67cf\u6811",
            "value": 36934,
            "textStyle": {
              "color": "rgb(112,120,128)"
            }
          },
          {
            "name": "\u5e38\u719f\u8def",
            "value": 55300,
            "textStyle": {
              "color": "rgb(30,49,125)"
            }
          },
          {
            "name": "\u5927\u534e\u4e09\u8def",
            "value": 36745,
            "textStyle": {
              "color": "rgb(99,114,118)"
            }
          },
          {
            "name": "\u6c76\u6c34\u8def",
            "value": 36740,
            "textStyle": {
              "color": "rgb(133,84,35)"
            }
          },
          {
            "name": "\u6c49\u4e2d\u8def",
            "value": 36640,
            "textStyle": {
              "color": "rgb(118,76,130)"
            }
          },
          {
            "name": "\u82b1\u6728\u8def",
            "value": 36202,
            "textStyle": {
              "color": "rgb(51,19,37)"
            }
          },
          {
            "name": "\u6768\u6811\u6d66\u8def",
            "value": 36144,
            "textStyle": {
              "color": "rgb(46,20,133)"
            }
          },
          {
            "name": "\u8679\u6865\u8def",
            "value": 58068,
            "textStyle": {
              "color": "rgb(67,160,12)"
            }
          },
          {
            "name": "\u5b9c\u5c71\u8def",
            "value": 132708,
            "textStyle": {
              "color": "rgb(37,29,110)"
            }
          },
          {
            "name": "\u9686\u660c\u8def",
            "value": 34663,
            "textStyle": {
              "color": "rgb(38,67,39)"
            }
          },
          {
            "name": "\u9c81\u73ed\u8def",
            "value": 34435,
            "textStyle": {
              "color": "rgb(143,8,70)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u4f53\u80b2\u9986",
            "value": 63729,
            "textStyle": {
              "color": "rgb(88,52,94)"
            }
          },
          {
            "name": "\u6c5f\u6e7e\u4f53\u80b2\u573a",
            "value": 33618,
            "textStyle": {
              "color": "rgb(125,98,118)"
            }
          },
          {
            "name": "\u897f\u85cf\u5317\u8def",
            "value": 33578,
            "textStyle": {
              "color": "rgb(100,24,5)"
            }
          },
          {
            "name": "\u8679\u68652\u53f7\u822a\u7ad9\u697c",
            "value": 33187,
            "textStyle": {
              "color": "rgb(148,47,25)"
            }
          },
          {
            "name": "\u91d1\u8fd0\u8def",
            "value": 33107,
            "textStyle": {
              "color": "rgb(114,59,11)"
            }
          },
          {
            "name": "\u4e16\u7eaa\u516c\u56ed",
            "value": 32624,
            "textStyle": {
              "color": "rgb(60,149,160)"
            }
          },
          {
            "name": "\u674e\u5b50\u56ed\u8def",
            "value": 32437,
            "textStyle": {
              "color": "rgb(56,4,1)"
            }
          },
          {
            "name": "\u56db\u5ddd\u5317\u8def",
            "value": 32180,
            "textStyle": {
              "color": "rgb(60,51,44)"
            }
          },
          {
            "name": "\u4e34\u5e73\u8def",
            "value": 31936,
            "textStyle": {
              "color": "rgb(35,151,49)"
            }
          },
          {
            "name": "\u6843\u6d66\u65b0\u6751",
            "value": 31712,
            "textStyle": {
              "color": "rgb(60,8,129)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u5927\u5b66\u7ad9",
            "value": 31597,
            "textStyle": {
              "color": "rgb(118,33,113)"
            }
          },
          {
            "name": "\u5609\u5b9a\u5317",
            "value": 31391,
            "textStyle": {
              "color": "rgb(44,7,120)"
            }
          },
          {
            "name": "\u884c\u77e5\u8def",
            "value": 30762,
            "textStyle": {
              "color": "rgb(38,76,21)"
            }
          },
          {
            "name": "\u4f0a\u7281\u8def",
            "value": 30744,
            "textStyle": {
              "color": "rgb(148,9,115)"
            }
          },
          {
            "name": "\u4e2d\u6f6d\u8def",
            "value": 30644,
            "textStyle": {
              "color": "rgb(15,125,151)"
            }
          },
          {
            "name": "\u56db\u5e73\u8def",
            "value": 30260,
            "textStyle": {
              "color": "rgb(116,77,77)"
            }
          },
          {
            "name": "\u9ec4\u5174\u8def",
            "value": 30186,
            "textStyle": {
              "color": "rgb(113,84,3)"
            }
          },
          {
            "name": "\u6210\u5c71\u8def",
            "value": 30041,
            "textStyle": {
              "color": "rgb(50,114,48)"
            }
          },
          {
            "name": "\u540c\u6d4e\u5927\u5b66",
            "value": 29995,
            "textStyle": {
              "color": "rgb(92,19,60)"
            }
          },
          {
            "name": "\u66f2\u9633\u8def",
            "value": 29800,
            "textStyle": {
              "color": "rgb(106,13,143)"
            }
          },
          {
            "name": "\u6768\u601d",
            "value": 29640,
            "textStyle": {
              "color": "rgb(74,125,23)"
            }
          },
          {
            "name": "\u91d1\u6c99\u6c5f\u8def",
            "value": 54991,
            "textStyle": {
              "color": "rgb(159,129,67)"
            }
          },
          {
            "name": "\u6bb7\u9ad8\u897f\u8def",
            "value": 29343,
            "textStyle": {
              "color": "rgb(124,87,157)"
            }
          },
          {
            "name": "\u6768\u9ad8\u5357\u8def",
            "value": 29251,
            "textStyle": {
              "color": "rgb(22,126,9)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u79d1\u6280\u9986",
            "value": 29188,
            "textStyle": {
              "color": "rgb(15,18,58)"
            }
          },
          {
            "name": "\u65b0\u6751\u8def",
            "value": 29037,
            "textStyle": {
              "color": "rgb(67,158,92)"
            }
          },
          {
            "name": "\u9526\u7ee3\u8def",
            "value": 28657,
            "textStyle": {
              "color": "rgb(122,98,108)"
            }
          },
          {
            "name": "\u82b3\u534e\u8def",
            "value": 28638,
            "textStyle": {
              "color": "rgb(111,126,159)"
            }
          },
          {
            "name": "\u9f99\u6f15\u8def",
            "value": 28333,
            "textStyle": {
              "color": "rgb(121,141,63)"
            }
          },
          {
            "name": "\u4e94\u89d2\u573a",
            "value": 28100,
            "textStyle": {
              "color": "rgb(109,73,25)"
            }
          },
          {
            "name": "\u82a6\u6052\u8def",
            "value": 28059,
            "textStyle": {
              "color": "rgb(52,146,22)"
            }
          },
          {
            "name": "\u5916\u73af\u8def",
            "value": 27931,
            "textStyle": {
              "color": "rgb(89,52,80)"
            }
          },
          {
            "name": "\u5ef6\u5409\u4e2d\u8def",
            "value": 27812,
            "textStyle": {
              "color": "rgb(113,151,65)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u897f\u7ad9",
            "value": 27646,
            "textStyle": {
              "color": "rgb(116,121,20)"
            }
          },
          {
            "name": "\u4e1c\u5b89\u8def",
            "value": 43291,
            "textStyle": {
              "color": "rgb(45,84,79)"
            }
          },
          {
            "name": "\u957f\u6c5f\u5357\u8def",
            "value": 27425,
            "textStyle": {
              "color": "rgb(133,155,59)"
            }
          },
          {
            "name": "\u91d1\u6865\u8def",
            "value": 27211,
            "textStyle": {
              "color": "rgb(131,71,22)"
            }
          },
          {
            "name": "\u5e02\u5149\u8def",
            "value": 26988,
            "textStyle": {
              "color": "rgb(58,86,84)"
            }
          },
          {
            "name": "\u8d64\u5cf0\u8def",
            "value": 26666,
            "textStyle": {
              "color": "rgb(113,18,136)"
            }
          },
          {
            "name": "\u5927\u6728\u6865\u8def ",
            "value": 26562,
            "textStyle": {
              "color": "rgb(41,153,26)"
            }
          },
          {
            "name": "\u4e1c\u5ddd\u8def",
            "value": 26301,
            "textStyle": {
              "color": "rgb(87,117,88)"
            }
          },
          {
            "name": "\u5ddd\u6c99",
            "value": 26258,
            "textStyle": {
              "color": "rgb(145,85,126)"
            }
          },
          {
            "name": "\u5c0f\u5357\u95e8",
            "value": 26233,
            "textStyle": {
              "color": "rgb(83,126,75)"
            }
          },
          {
            "name": "\u66f2\u961c\u8def",
            "value": 26197,
            "textStyle": {
              "color": "rgb(22,8,85)"
            }
          },
          {
            "name": "\u771f\u5317\u8def",
            "value": 26146,
            "textStyle": {
              "color": "rgb(119,40,74)"
            }
          },
          {
            "name": "\u84dd\u6751\u8def",
            "value": 36921,
            "textStyle": {
              "color": "rgb(160,144,75)"
            }
          },
          {
            "name": "\u5b9d\u5c71\u8def",
            "value": 25904,
            "textStyle": {
              "color": "rgb(86,129,57)"
            }
          },
          {
            "name": "\u5510\u9547",
            "value": 25800,
            "textStyle": {
              "color": "rgb(102,1,147)"
            }
          },
          {
            "name": "\u9a6c\u5f53\u8def",
            "value": 25737,
            "textStyle": {
              "color": "rgb(62,34,84)"
            }
          },
          {
            "name": "\u6c5f\u6d66\u8def",
            "value": 25687,
            "textStyle": {
              "color": "rgb(149,14,19)"
            }
          },
          {
            "name": "\u4e1c\u5b9d\u5174\u8def",
            "value": 25109,
            "textStyle": {
              "color": "rgb(24,54,101)"
            }
          },
          {
            "name": "\u5c9a\u768b\u8def",
            "value": 24964,
            "textStyle": {
              "color": "rgb(105,94,43)"
            }
          },
          {
            "name": "\u67ab\u6865\u8def",
            "value": 24940,
            "textStyle": {
              "color": "rgb(121,144,15)"
            }
          },
          {
            "name": "\u6d77\u4f26\u8def",
            "value": 41233,
            "textStyle": {
              "color": "rgb(57,85,136)"
            }
          },
          {
            "name": "\u65b0\u5929\u5730",
            "value": 24037,
            "textStyle": {
              "color": "rgb(117,2,59)"
            }
          },
          {
            "name": "\u56fd\u6743\u8def",
            "value": 23932,
            "textStyle": {
              "color": "rgb(137,147,14)"
            }
          },
          {
            "name": "\u5bcc\u9526\u8def",
            "value": 23890,
            "textStyle": {
              "color": "rgb(48,80,146)"
            }
          },
          {
            "name": "\u65b0\u95f8\u8def",
            "value": 23686,
            "textStyle": {
              "color": "rgb(122,122,60)"
            }
          },
          {
            "name": "\u6c5f\u6708\u8def",
            "value": 23680,
            "textStyle": {
              "color": "rgb(1,144,28)"
            }
          },
          {
            "name": "\u9f99\u67cf\u65b0\u6751",
            "value": 23569,
            "textStyle": {
              "color": "rgb(119,63,121)"
            }
          },
          {
            "name": "\u957f\u6e05\u8def",
            "value": 23468,
            "textStyle": {
              "color": "rgb(89,143,112)"
            }
          },
          {
            "name": "\u4e2d\u5174\u8def",
            "value": 23455,
            "textStyle": {
              "color": "rgb(25,113,102)"
            }
          },
          {
            "name": "\u4e09\u6797",
            "value": 23336,
            "textStyle": {
              "color": "rgb(102,57,103)"
            }
          },
          {
            "name": "\u573a\u4e2d\u8def",
            "value": 22921,
            "textStyle": {
              "color": "rgb(99,108,148)"
            }
          },
          {
            "name": "\u989b\u6865",
            "value": 22921,
            "textStyle": {
              "color": "rgb(35,146,76)"
            }
          },
          {
            "name": "\u60e0\u5357",
            "value": 22467,
            "textStyle": {
              "color": "rgb(9,144,5)"
            }
          },
          {
            "name": "\u535a\u5174\u8def",
            "value": 22397,
            "textStyle": {
              "color": "rgb(111,58,72)"
            }
          },
          {
            "name": "\u5b9d\u5b89\u516c\u8def",
            "value": 22279,
            "textStyle": {
              "color": "rgb(100,23,94)"
            }
          },
          {
            "name": "\u7941\u8fde\u5c71\u8def",
            "value": 21417,
            "textStyle": {
              "color": "rgb(136,141,42)"
            }
          },
          {
            "name": "\u4e2d\u5c71\u5317\u8def",
            "value": 21033,
            "textStyle": {
              "color": "rgb(36,159,43)"
            }
          },
          {
            "name": "\u4e91\u5c71\u8def",
            "value": 20872,
            "textStyle": {
              "color": "rgb(103,95,140)"
            }
          },
          {
            "name": "\u978d\u5c71\u65b0\u6751",
            "value": 20554,
            "textStyle": {
              "color": "rgb(88,85,134)"
            }
          },
          {
            "name": "\u5ae9\u6c5f\u8def",
            "value": 20542,
            "textStyle": {
              "color": "rgb(98,30,122)"
            }
          },
          {
            "name": "\u5357\u6d66\u5927\u6865",
            "value": 20479,
            "textStyle": {
              "color": "rgb(21,91,98)"
            }
          },
          {
            "name": "\u5927\u6e21\u6cb3\u8def",
            "value": 20055,
            "textStyle": {
              "color": "rgb(90,45,132)"
            }
          },
          {
            "name": "\u5fb7\u5e73\u8def",
            "value": 20053,
            "textStyle": {
              "color": "rgb(15,99,54)"
            }
          },
          {
            "name": "\u77f3\u9f99\u8def",
            "value": 20041,
            "textStyle": {
              "color": "rgb(45,50,22)"
            }
          },
          {
            "name": "\u6c34\u57ce\u8def",
            "value": 19997,
            "textStyle": {
              "color": "rgb(120,31,32)"
            }
          },
          {
            "name": "\u5fa1\u6865",
            "value": 19915,
            "textStyle": {
              "color": "rgb(70,1,160)"
            }
          },
          {
            "name": "\u6e90\u6df1\u4f53\u80b2\u4e2d\u5fc3",
            "value": 19444,
            "textStyle": {
              "color": "rgb(0,55,90)"
            }
          },
          {
            "name": "\u7941\u8fde\u5c71\u5357\u8def",
            "value": 19285,
            "textStyle": {
              "color": "rgb(59,101,70)"
            }
          },
          {
            "name": "\u91d1\u6d77\u8def",
            "value": 19175,
            "textStyle": {
              "color": "rgb(7,78,100)"
            }
          },
          {
            "name": "\u534e\u590f\u4e1c\u8def",
            "value": 19127,
            "textStyle": {
              "color": "rgb(72,93,85)"
            }
          },
          {
            "name": "\u547c\u5170\u8def",
            "value": 19076,
            "textStyle": {
              "color": "rgb(141,31,131)"
            }
          },
          {
            "name": "\u9ad8\u79d1\u897f\u8def",
            "value": 18977,
            "textStyle": {
              "color": "rgb(20,52,137)"
            }
          },
          {
            "name": "\u5609\u5b9a\u65b0\u57ce",
            "value": 18950,
            "textStyle": {
              "color": "rgb(63,36,57)"
            }
          },
          {
            "name": "\u9f99\u534e\u4e2d\u8def",
            "value": 18838,
            "textStyle": {
              "color": "rgb(31,16,26)"
            }
          },
          {
            "name": "\u5b89\u4ead",
            "value": 18744,
            "textStyle": {
              "color": "rgb(86,135,67)"
            }
          },
          {
            "name": "\u51cc\u5146\u65b0\u6751",
            "value": 18709,
            "textStyle": {
              "color": "rgb(106,8,108)"
            }
          },
          {
            "name": "\u4e34\u6c82\u65b0\u6751",
            "value": 18702,
            "textStyle": {
              "color": "rgb(8,124,60)"
            }
          },
          {
            "name": "\u661f\u4e2d\u8def",
            "value": 18583,
            "textStyle": {
              "color": "rgb(26,67,86)"
            }
          },
          {
            "name": "\u4e94\u83b2\u8def",
            "value": 18477,
            "textStyle": {
              "color": "rgb(9,103,92)"
            }
          },
          {
            "name": "\u677e\u6c5f\u4f53\u80b2\u4e2d\u5fc3",
            "value": 18372,
            "textStyle": {
              "color": "rgb(66,96,10)"
            }
          },
          {
            "name": "\u7f8e\u5170\u6e56",
            "value": 18269,
            "textStyle": {
              "color": "rgb(136,123,73)"
            }
          },
          {
            "name": "\u6d66\u6c5f\u9547",
            "value": 18236,
            "textStyle": {
              "color": "rgb(121,24,113)"
            }
          },
          {
            "name": "\u6c5f\u6d66\u516c\u56ed",
            "value": 17744,
            "textStyle": {
              "color": "rgb(154,18,135)"
            }
          },
          {
            "name": "\u5b81\u56fd\u8def",
            "value": 17395,
            "textStyle": {
              "color": "rgb(89,38,102)"
            }
          },
          {
            "name": "\u9686\u5fb7\u8def",
            "value": 17394,
            "textStyle": {
              "color": "rgb(148,95,135)"
            }
          },
          {
            "name": "\u90ae\u7535\u65b0\u6751",
            "value": 17343,
            "textStyle": {
              "color": "rgb(72,40,72)"
            }
          },
          {
            "name": "\u4e91\u53f0\u8def",
            "value": 16947,
            "textStyle": {
              "color": "rgb(111,124,10)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u6e38\u6cf3\u9986",
            "value": 16869,
            "textStyle": {
              "color": "rgb(67,52,77)"
            }
          },
          {
            "name": "\u7fd4\u6bb7\u8def",
            "value": 16809,
            "textStyle": {
              "color": "rgb(157,99,26)"
            }
          },
          {
            "name": "\u677e\u6c5f\u65b0\u57ce",
            "value": 16453,
            "textStyle": {
              "color": "rgb(127,60,112)"
            }
          },
          {
            "name": "\u6f15\u6eaa\u8def",
            "value": 16446,
            "textStyle": {
              "color": "rgb(12,131,13)"
            }
          },
          {
            "name": "\u9ad8\u9752\u8def",
            "value": 16383,
            "textStyle": {
              "color": "rgb(87,31,95)"
            }
          },
          {
            "name": "\u6d66\u4e1c\u56fd\u9645\u673a\u573a",
            "value": 16327,
            "textStyle": {
              "color": "rgb(32,84,139)"
            }
          },
          {
            "name": "\u91d1\u5e73\u8def",
            "value": 15900,
            "textStyle": {
              "color": "rgb(42,71,2)"
            }
          },
          {
            "name": "\u5b8b\u56ed\u8def",
            "value": 15860,
            "textStyle": {
              "color": "rgb(68,107,63)"
            }
          },
          {
            "name": "\u4e30\u5e84",
            "value": 15720,
            "textStyle": {
              "color": "rgb(141,63,75)"
            }
          },
          {
            "name": "\u4e09\u6797\u4e1c",
            "value": 15694,
            "textStyle": {
              "color": "rgb(34,95,46)"
            }
          },
          {
            "name": "\u8861\u5c71\u8def",
            "value": 15247,
            "textStyle": {
              "color": "rgb(2,28,129)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u56fe\u4e66\u9986",
            "value": 15128,
            "textStyle": {
              "color": "rgb(103,90,15)"
            }
          },
          {
            "name": "\u5609\u5b9a\u897f",
            "value": 15007,
            "textStyle": {
              "color": "rgb(81,147,105)"
            }
          },
          {
            "name": "\u771f\u5982",
            "value": 14890,
            "textStyle": {
              "color": "rgb(128,156,104)"
            }
          },
          {
            "name": "\u4e1c\u660e\u8def",
            "value": 14848,
            "textStyle": {
              "color": "rgb(129,22,13)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u8d5b\u8f66\u573a",
            "value": 14770,
            "textStyle": {
              "color": "rgb(17,83,67)"
            }
          },
          {
            "name": "\u8054\u822a\u8def",
            "value": 14673,
            "textStyle": {
              "color": "rgb(83,8,20)"
            }
          },
          {
            "name": "\u822a\u4e2d\u8def",
            "value": 14420,
            "textStyle": {
              "color": "rgb(100,122,101)"
            }
          },
          {
            "name": "\u5149\u660e\u8def",
            "value": 14371,
            "textStyle": {
              "color": "rgb(104,6,77)"
            }
          },
          {
            "name": "\u9a6c\u9646",
            "value": 14059,
            "textStyle": {
              "color": "rgb(55,158,121)"
            }
          },
          {
            "name": "\u5218\u884c",
            "value": 13789,
            "textStyle": {
              "color": "rgb(23,55,98)"
            }
          },
          {
            "name": "\u5de8\u5cf0\u8def",
            "value": 24410,
            "textStyle": {
              "color": "rgb(95,90,134)"
            }
          },
          {
            "name": "\u7075\u5ca9\u5357\u8def",
            "value": 13673,
            "textStyle": {
              "color": "rgb(138,42,143)"
            }
          },
          {
            "name": "\u6dde\u6d5c\u8def",
            "value": 13628,
            "textStyle": {
              "color": "rgb(63,117,41)"
            }
          },
          {
            "name": "\u9f99\u6eaa\u8def",
            "value": 13614,
            "textStyle": {
              "color": "rgb(36,53,121)"
            }
          },
          {
            "name": "\u822a\u6d25\u8def",
            "value": 13547,
            "textStyle": {
              "color": "rgb(61,61,41)"
            }
          },
          {
            "name": "\u6c5f\u6768\u5317\u8def",
            "value": 13451,
            "textStyle": {
              "color": "rgb(95,69,134)"
            }
          },
          {
            "name": "\u5317\u6865",
            "value": 13359,
            "textStyle": {
              "color": "rgb(83,146,6)"
            }
          },
          {
            "name": "\u56fd\u9645\u5ba2\u8fd0\u4e2d\u5fc3",
            "value": 13265,
            "textStyle": {
              "color": "rgb(144,48,69)"
            }
          },
          {
            "name": "\u6b66\u5b81\u8def",
            "value": 13244,
            "textStyle": {
              "color": "rgb(81,156,156)"
            }
          },
          {
            "name": "\u94f6\u90fd\u8def",
            "value": 13019,
            "textStyle": {
              "color": "rgb(105,52,12)"
            }
          },
          {
            "name": "\u4e0a\u5357\u8def",
            "value": 12494,
            "textStyle": {
              "color": "rgb(0,79,84)"
            }
          },
          {
            "name": "\u4e1c\u9756\u8def",
            "value": 12479,
            "textStyle": {
              "color": "rgb(86,78,69)"
            }
          },
          {
            "name": "\u9e64\u6c99\u822a\u57ce",
            "value": 12428,
            "textStyle": {
              "color": "rgb(51,18,14)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u52a8\u7269\u56ed",
            "value": 12387,
            "textStyle": {
              "color": "rgb(116,23,116)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u513f\u7ae5\u533b\u5b66\u4e2d\u5fc3",
            "value": 12314,
            "textStyle": {
              "color": "rgb(87,34,118)"
            }
          },
          {
            "name": "\u5317\u6d0b\u6cfe\u8def",
            "value": 12259,
            "textStyle": {
              "color": "rgb(83,28,96)"
            }
          },
          {
            "name": "\u53cb\u8c0a\u8def",
            "value": 12232,
            "textStyle": {
              "color": "rgb(149,107,15)"
            }
          },
          {
            "name": "\u6d66\u4e09\u8def",
            "value": 12195,
            "textStyle": {
              "color": "rgb(40,44,74)"
            }
          },
          {
            "name": "\u5251\u5ddd\u8def",
            "value": 11925,
            "textStyle": {
              "color": "rgb(147,64,37)"
            }
          },
          {
            "name": "\u9ec4\u5174\u516c\u56ed",
            "value": 11917,
            "textStyle": {
              "color": "rgb(100,100,28)"
            }
          },
          {
            "name": "\u534e\u5b81\u8def",
            "value": 11640,
            "textStyle": {
              "color": "rgb(4,121,84)"
            }
          },
          {
            "name": "\u4e2d\u6625\u8def",
            "value": 11560,
            "textStyle": {
              "color": "rgb(86,36,160)"
            }
          },
          {
            "name": "\u9f99\u534e",
            "value": 11492,
            "textStyle": {
              "color": "rgb(30,98,71)"
            }
          },
          {
            "name": "\u91d1\u4eac\u8def",
            "value": 11485,
            "textStyle": {
              "color": "rgb(111,25,7)"
            }
          },
          {
            "name": "\u767d\u94f6\u8def",
            "value": 11447,
            "textStyle": {
              "color": "rgb(91,69,21)"
            }
          },
          {
            "name": "\u65b0\u6c5f\u6e7e\u57ce",
            "value": 11174,
            "textStyle": {
              "color": "rgb(7,125,62)"
            }
          },
          {
            "name": "\u63d0\u7bee\u6865",
            "value": 11074,
            "textStyle": {
              "color": "rgb(88,54,124)"
            }
          },
          {
            "name": "\u534e\u590f\u897f\u8def",
            "value": 11028,
            "textStyle": {
              "color": "rgb(96,28,81)"
            }
          },
          {
            "name": "\u95f5\u884c\u5f00\u53d1\u533a",
            "value": 10934,
            "textStyle": {
              "color": "rgb(154,108,69)"
            }
          },
          {
            "name": "\u4e0a\u5927\u8def",
            "value": 10924,
            "textStyle": {
              "color": "rgb(58,29,44)"
            }
          },
          {
            "name": "\u53cb\u8c0a\u897f\u8def",
            "value": 10917,
            "textStyle": {
              "color": "rgb(21,45,61)"
            }
          },
          {
            "name": "\u7231\u56fd\u8def",
            "value": 10865,
            "textStyle": {
              "color": "rgb(160,69,19)"
            }
          },
          {
            "name": "\u7f57\u5c71\u8def",
            "value": 10758,
            "textStyle": {
              "color": "rgb(138,134,60)"
            }
          },
          {
            "name": "\u82b1\u6865",
            "value": 10708,
            "textStyle": {
              "color": "rgb(97,78,71)"
            }
          },
          {
            "name": "\u5468\u6d66\u4e1c",
            "value": 10691,
            "textStyle": {
              "color": "rgb(83,142,16)"
            }
          },
          {
            "name": "\u8679\u68651\u53f7\u822a\u7ad9\u697c",
            "value": 10105,
            "textStyle": {
              "color": "rgb(1,81,140)"
            }
          },
          {
            "name": "\u6768\u9ad8\u5317\u8def",
            "value": 10080,
            "textStyle": {
              "color": "rgb(35,59,121)"
            }
          },
          {
            "name": "\u6d1e\u6cfe",
            "value": 9944,
            "textStyle": {
              "color": "rgb(107,72,108)"
            }
          },
          {
            "name": "\u4e1c\u9646\u8def",
            "value": 9865,
            "textStyle": {
              "color": "rgb(129,15,112)"
            }
          },
          {
            "name": "\u9189\u767d\u6c60",
            "value": 9730,
            "textStyle": {
              "color": "rgb(43,50,66)"
            }
          },
          {
            "name": "\u6625\u7533\u8def",
            "value": 9636,
            "textStyle": {
              "color": "rgb(9,123,23)"
            }
          },
          {
            "name": "\u5357\u9648\u8def",
            "value": 9615,
            "textStyle": {
              "color": "rgb(100,97,79)"
            }
          },
          {
            "name": "\u65b0\u573a",
            "value": 9287,
            "textStyle": {
              "color": "rgb(74,64,143)"
            }
          },
          {
            "name": "\u6c34\u4ea7\u8def",
            "value": 9170,
            "textStyle": {
              "color": "rgb(111,134,4)"
            }
          },
          {
            "name": "\u7f57\u5357\u65b0\u6751",
            "value": 9124,
            "textStyle": {
              "color": "rgb(22,87,60)"
            }
          },
          {
            "name": "\u4e09\u95e8\u8def",
            "value": 8512,
            "textStyle": {
              "color": "rgb(98,103,12)"
            }
          },
          {
            "name": "\u5927\u573a\u9547",
            "value": 7931,
            "textStyle": {
              "color": "rgb(108,50,21)"
            }
          },
          {
            "name": "\u5916\u9ad8\u6865\u4fdd\u7a0e\u533a\u5317",
            "value": 7821,
            "textStyle": {
              "color": "rgb(36,93,119)"
            }
          },
          {
            "name": "\u6dde\u53d1\u8def",
            "value": 7821,
            "textStyle": {
              "color": "rgb(59,127,15)"
            }
          },
          {
            "name": "\u91d1\u6c99\u6c5f\u897f\u8def",
            "value": 7494,
            "textStyle": {
              "color": "rgb(110,70,49)"
            }
          },
          {
            "name": "\u4e1c\u65b9\u4f53\u80b2\u4e2d\u5fc3",
            "value": 7450,
            "textStyle": {
              "color": "rgb(28,103,79)"
            }
          },
          {
            "name": "\u6c11\u751f\u8def",
            "value": 7367,
            "textStyle": {
              "color": "rgb(110,37,13)"
            }
          },
          {
            "name": "\u6e2f\u57ce\u8def",
            "value": 7359,
            "textStyle": {
              "color": "rgb(100,18,102)"
            }
          },
          {
            "name": "\u6d32\u6d77\u8def",
            "value": 7140,
            "textStyle": {
              "color": "rgb(59,3,134)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u6c7d\u8f66\u57ce",
            "value": 7042,
            "textStyle": {
              "color": "rgb(38,150,111)"
            }
          },
          {
            "name": "\u4e94\u6d32\u5927\u9053",
            "value": 6663,
            "textStyle": {
              "color": "rgb(22,33,118)"
            }
          },
          {
            "name": "\u7533\u6c5f\u8def",
            "value": 6631,
            "textStyle": {
              "color": "rgb(139,108,33)"
            }
          },
          {
            "name": "\u4e0a\u6d77\u91ce\u751f\u52a8\u7269\u56ed",
            "value": 6389,
            "textStyle": {
              "color": "rgb(103,10,124)"
            }
          },
          {
            "name": "\u4e2d\u534e\u827a\u672f\u5bab",
            "value": 6326,
            "textStyle": {
              "color": "rgb(92,148,85)"
            }
          },
          {
            "name": "\u9f99\u8000\u8def",
            "value": 5851,
            "textStyle": {
              "color": "rgb(140,58,33)"
            }
          },
          {
            "name": "\u94c1\u529b\u8def",
            "value": 5830,
            "textStyle": {
              "color": "rgb(130,128,17)"
            }
          },
          {
            "name": "\u5916\u9ad8\u6865\u4fdd\u7a0e\u533a\u5357",
            "value": 5428,
            "textStyle": {
              "color": "rgb(21,5,19)"
            }
          },
          {
            "name": "\u51cc\u7a7a\u8def",
            "value": 5251,
            "textStyle": {
              "color": "rgb(27,15,43)"
            }
          },
          {
            "name": "\u6b66\u5a01\u8def",
            "value": 5123,
            "textStyle": {
              "color": "rgb(15,25,109)"
            }
          },
          {
            "name": "\u540e\u6ee9",
            "value": 4910,
            "textStyle": {
              "color": "rgb(129,32,144)"
            }
          },
          {
            "name": "\u6f58\u5e7f\u8def",
            "value": 4902,
            "textStyle": {
              "color": "rgb(70,143,112)"
            }
          },
          {
            "name": "\u6ef4\u6c34\u6e56",
            "value": 4882,
            "textStyle": {
              "color": "rgb(72,9,59)"
            }
          },
          {
            "name": "\u5146\u4e30\u8def",
            "value": 4857,
            "textStyle": {
              "color": "rgb(110,37,58)"
            }
          },
          {
            "name": "\u4e91\u9526\u8def",
            "value": 4488,
            "textStyle": {
              "color": "rgb(19,38,19)"
            }
          },
          {
            "name": "\u7d2b\u85e4\u8def",
            "value": 4452,
            "textStyle": {
              "color": "rgb(58,71,92)"
            }
          },
          {
            "name": "\u5b9d\u6768\u8def",
            "value": 4276,
            "textStyle": {
              "color": "rgb(50,115,154)"
            }
          },
          {
            "name": "\u660c\u5409\u4e1c\u8def",
            "value": 3829,
            "textStyle": {
              "color": "rgb(88,126,5)"
            }
          },
          {
            "name": "\u677e\u6c5f\u5357\u7ad9",
            "value": 3796,
            "textStyle": {
              "color": "rgb(106,98,121)"
            }
          },
          {
            "name": "\u6587\u4e95\u8def",
            "value": 3738,
            "textStyle": {
              "color": "rgb(80,49,102)"
            }
          },
          {
            "name": "\u4e66\u9662",
            "value": 3492,
            "textStyle": {
              "color": "rgb(84,136,101)"
            }
          },
          {
            "name": "\u7941\u534e\u8def",
            "value": 3242,
            "textStyle": {
              "color": "rgb(75,19,0)"
            }
          },
          {
            "name": "\u521b\u65b0\u4e2d\u8def",
            "value": 3041,
            "textStyle": {
              "color": "rgb(75,91,144)"
            }
          },
          {
            "name": "\u4e34\u6e2f\u5927\u9053",
            "value": 2974,
            "textStyle": {
              "color": "rgb(44,52,74)"
            }
          },
          {
            "name": "\u5f20\u534e\u6d5c",
            "value": 2887,
            "textStyle": {
              "color": "rgb(105,25,53)"
            }
          },
          {
            "name": "\u8fdc\u4e1c\u5927\u9053",
            "value": 2588,
            "textStyle": {
              "color": "rgb(3,123,57)"
            }
          },
          {
            "name": "\u6bb7\u9ad8\u4e1c\u8def",
            "value": 2582,
            "textStyle": {
              "color": "rgb(87,85,98)"
            }
          },
          {
            "name": "\u6d77\u5929\u4e09\u8def",
            "value": 2543,
            "textStyle": {
              "color": "rgb(138,30,130)"
            }
          },
          {
            "name": "\u60e0\u5357\u4e1c",
            "value": 2361,
            "textStyle": {
              "color": "rgb(63,32,133)"
            }
          },
          {
            "name": "\u822a\u5934\u4e1c",
            "value": 2127,
            "textStyle": {
              "color": "rgb(104,38,103)"
            }
          },
          {
            "name": "\u590d\u5174\u5c9b",
            "value": 1974,
            "textStyle": {
              "color": "rgb(111,37,64)"
            }
          },
          {
            "name": "\u534e\u590f\u4e2d\u8def",
            "value": 694,
            "textStyle": {
              "color": "rgb(140,67,97)"
            }
          }
        ],
        "drawOutOfBound": false,
        "textStyle": {
          "emphasis": {}
        }
      }
    ],
    "legend": [
      {
        "data": [],
        "selected": {},
        "show": false,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14,
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