<script setup>
import {onMounted, ref} from "vue";
import AllSitesPassengerOverTime from "@/components/AllSitesPassengerOverTime.vue";
import SitePassengerFlowRanks from "@/components/SitePassengerFlowRanks.vue";
import LineIncomeRanks from "@/components/LineIncomeRanks.vue";
import SitePassengerFlowWordClound from "@/components/SitePassengerFlowWordClound.vue";

let searchDate = new Date()
const formatTime = (data, flag) => {
  const date = new Date(data);
  const y = date.getFullYear();
  let m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  let d = date.getDate();
  d = d < 10 ? '0' + d : d;
  let h = date.getHours();
  h = h < 10 ? '0' + h : h;
  let minute = date.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  let second = date.getSeconds();
  second = second < 10 ? '0' + second : second;
  if (flag) {
    return y + '-' + m + '-' + d;
  }
  return y + '年' + m + '月' + d + '日 ' + h + ':' + minute + ':' + second;
};
const nowTime = ref("")
onMounted(() => {
  setInterval(() => {
    nowTime.value = formatTime(new Date(), false)
  })
})
</script>
<template>
  <div class="body">
    <label style="display: inline-block;text-align: center">
      <h1>地铁客流数据统计分析展示界面</h1>
      <p>{{ nowTime }}</p>
    </label>
    <div style="width: 100%;display:flex;flex-direction: row">
      <div style="width: 250px">
        <div class="display-card" style="text-align: center;">
          <h3>单天各条线路客流量</h3>
          <all-sites-passenger-over-time
              style="margin-top: 10px;width: 100%;height: 80%"></all-sites-passenger-over-time>
        </div>
        <div class="display-card" style="text-align: center;">
          <h3>各条线路收入</h3>
          <site-passenger-flow-ranks style="margin-top: 10px;width: 100%;height: 80%"></site-passenger-flow-ranks>
        </div>
      </div>
      <div style="width: 250px;margin-left: 12px">
        <div class="display-card" style="height: 45%;text-align: center;">
          <h3>地铁总客流时间趋势</h3>
          <all-sites-passenger-over-time
              style="margin-top: 10px;width: 100%;height: 80%"></all-sites-passenger-over-time>
        </div>
        <div class="display-card" style="height: 54%;text-align: center;">
          <h3>地铁线客流时间趋势</h3>
          <site-passenger-flow-ranks style="margin-top: 10px;width: 100%;height: 80%"></site-passenger-flow-ranks>
        </div>
      </div>
      <div style="width: 600px;margin-left: 12px">
        <div style="width: 35%;margin-left: 5px;display: flex;flex-direction: row;height: 52%">
          <div style="height: 102%;width: 500px">
            <el-input class="input_box" placeholder="输入需要查询的时间" style="color:#868276 ">
              <template #suffix>
                <el-date-picker
                    style="width:200px"
                    v-model="searchDate"
                    type="date"
                    placeholder="Pick a day"
                />
              </template>
              <template #append>
                <el-button>查询</el-button>
              </template>
            </el-input>
            <div
                class="searchCard">
              <div class="row-card">
                <div class="card-info" style="width: 28%;">
                  <h5><img style="width: 8%" src=../assets/left.png> 运营线路数</h5>
                  <h1>14</h1>
                </div>
                <div class="card-info" style="margin-left: 5px;width: 28%;">
                  <h5><img style="width: 8%" src="../assets/left.png"> 运营线站点数</h5>
                  <h1>313</h1>
                </div>
                <div class="card-info" style="margin-left: 5px;width: 40%;">
                  <h5><img style="width: 6%" src=../assets/left.png> 交通卡数量</h5>
                  <h1>2432243</h1>
                </div>
              </div>
              <div class="row-card">
                <div class="card-info" style="width: 31%;">
                  <h5><img style="width: 8%" src=../assets/left.png> 入站人次</h5>
                  <h1>4541256</h1>
                </div>
                <div class="card-info" style="margin-left: 5px;width: 31%;">
                  <h5><img style="width: 8%" src=../assets/left.png> 出站人次</h5>
                  <h1>4484062</h1>
                </div>
                <div class="card-info" style="width: 35%;margin-left: 5px;">
                  <h5><img style="width: 8%" src=../assets/left.png> 站点平均客流</h5>
                  <h1>28831.7</h1>
                </div>
              </div>
              <div class="row-card">
                <div class="card-info" style="width: 32%;">
                  <h5><img style="width: 8%" src=../assets/left.png> 平均每天乘坐次数</h5>
                  <h1>1.84</h1>
                </div>
                <div class="card-info" style="width: 42%;margin-left: 5px;">
                  <h5><img style="width: 6%" src=../assets/left.png> 营业收入(元)</h5>
                  <h1>18207594.9</h1>
                </div>
                <div class="card-info" style="width: 23%;margin-left: 5px;">
                  <h5><img style="width: 10%" src=../assets/left.png> 平均消费额</h5>
                  <h1>4.1</h1>
                </div>
              </div>
            </div>
          </div>
          <div style="width: 60%;display: flex;flex-direction: column">
            <div class="display-card"
                 style="width: 330px;height: 175px;border-radius:15px;text-align: center;">
              <h3 style="margin-left: 26%">不同消费金额占比</h3>
              <line-income-ranks
                  style="margin-top: 10px;width: 100%;height: 80%"></line-income-ranks>
            </div>
            <div class="display-card"
                 style="width: 330px;margin-top: 5px;height: 175px;border-radius:15px;text-align: center;">
              <h3 style="margin-left: 26%">二号线站点收入贡献</h3>
              <line-income-ranks
                  style="margin-top: 10px;width: 100%;height: 80%"></line-income-ranks>
            </div>
          </div>
        </div>
        <div style="display: flex;flex-direction: row;height: 46%">
          <div class="display-card" style="width: 65%;margin-top: 10px;height: 100%;text-align: center;">
            <h3 style="margin-left: 30%">站点客流量词云</h3>
            <site-passenger-flow-word-clound
                style="margin-top: 10px;width: 400px;height: 80%"></site-passenger-flow-word-clound>
          </div>
          <div class="display-card"
               style="margin-left: 15px;width: 67%;margin-top: 10px;height: 100%;text-align: center;">
            <h3 style="margin-left: 30%">二号线站点客流量比例</h3>
            <all-sites-passenger-over-time
                style="margin-top: 10px;width: 400px;height: 80%"></all-sites-passenger-over-time>
          </div>
        </div>

      </div>

    </div>

  </div>

</template>

<style scoped>
.body {

  display: flex;
  flex-direction: column;
  width: auto;
}

.searchCard {
  padding: 10px;
  border-radius: 25px;
  background-color: #eae8d4;
  width: 95%;
  height: 85%;
  margin-top: 5px;
  display: flex;
  flex-direction: column
}

.card-info {
  background-color: #fceab9;
  border-radius: 15px;
  padding: 8px;
}

.row-card {
  margin: 5px;
  display: flex;
  flex-direction: row;
}

.input_box {
  width: 455px;
  margin-right: 15px;
  border-radius: 95px;
  border: 1px solid black;
}

:deep(.el-input__wrapper) {
  background-color: transparent; /*覆盖原背景颜色，设置成透明 */
  border-radius: 90px;
  border: 0;
  box-shadow: 0 0 0 0px;
}

:deep(.el-input__suffix) {
  background-color: #eae8d4;
  margin: 5px;
  border-radius: 15px;
  border: 0;
  box-shadow: 0 0 0 0px;
}

:deep(.el-input-group__append) {
  margin: 5px;
  overflow: hidden;
  width: 5vw;
  background: #ac9673;
  border-radius: 95px;
  color: white;
  border: 0;
  box-shadow: 0 0 0 0px;
}

.display-card {
  margin-bottom: 6px;
  border-radius: 20px;
  height: 320px;
  padding-top: 5px;
  text-align: center;
  width: 100%;
  background-color: #eae8d4;
}

.display-card h3 {
  font-size: 13px;
  background-color: #fceab9;
  border-radius: 10px;
  width: 160px;
  margin-left: 20%;
  text-align: center;
}

.body h1 {
  font-size: 30px;
  float: none;
}

.body p {
  color: #868276;
  float: right;
}
</style>