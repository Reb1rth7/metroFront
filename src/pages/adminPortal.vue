<script setup>
import {nextTick, reactive, ref} from "vue";

let searchDate = new Date()
const tableData = reactive(([
  {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  }, {
    no: "2023081001",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  },
  {
    no: "2023081002",
    username: "Edward1",
    avatar: "../src/assets/avatar.png",
    time: "2016-05-02 20:45",
    name: "第一页",
    actionTime: "3次"
  },
]));
let dialogVisible = ref(false)
let currentPage = reactive(ref(1)); // 当前页码
const total = reactive(ref(20));  // 总条数
let pageSize = reactive(ref(7));  // 每页的数据条数
const dialogData = {
  avatar: "",
  ID: "1",
  phone: " 12345678900",
  name: "張偉",
  siteName: "深圳市9号线 (梅林线) -深大南 站",
  actionTime: '3次'
}
const handleDetails = (val) => {
  console.log(val)
  dialogData.ID = val.ID
  dialogData.avatar = val.avatar
  dialogData.actionTime = val.actionTime
}
const handleDelete = (index) => {
  tableData.splice(index, 1);
}
const handleCurrentChange = (val) => {
  currentPage = reactive(ref(val));
}
</script>

<template>
  <el-col style="justify-content: space-between">
    <el-input class="input_box" placeholder="输入需要查询的时间" style="color:#868276 ">
      <template #suffix>
        <el-date-picker
            style="width:15vw"
            v-model="searchDate"
            type="date"
            placeholder="Pick a day"
        />
      </template>
      <template #append>
        <el-button>查询地铁网情况及建议</el-button>
      </template>
    </el-input>
    <el-button class="button" round style="margin-left: 5vw">统计性建议</el-button>
    <el-button class="button" round
               style="width: 17vw;margin-left: 3vw;background-color: #ffd66d">
      黑名单查询与管理
    </el-button>
  </el-col>
  <div class="table" style="padding-top: 1vh;margin-top: 1%;">
    <!-- 表格 -->
    <div class="table-header">
      <label style="width: 12vw;text-align: center;margin-top: 1vh">序号</label>
      <label style="width: 12vw;text-align: center;margin-top: 1vh">用户名</label>
      <label style="width: 10vw;text-align: center;margin-top: 1vh">头像</label>
      <label style="width: 20vw;text-align: center;margin-top: 1vh">创建时间</label>
      <label style="width: 20vw;text-align: center;margin-top: 1vh">异常行为次数</label>
      <label style="width: 20vw;text-align: center;margin-top: 1vh">操作</label>
    </div>
    <el-table class="elTable" :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    >
      <el-table-column align="center" prop="no" width="210" >
        <template #default="scope">
          <input type="text" v-model="scope.row.no" class="ipt" style="  text-align: center;">
        </template>
      </el-table-column>
      <el-table-column align="center" prop="username" width="100">
        <template #default="scope">
          <input type="text" v-model="scope.row.username" class="ipt" style="margin-left: 0">
        </template>
      </el-table-column>
      <el-table-column align="center" prop="avatar" width="180">
        <template #default="scope">
          <el-avatar class='user-avatar' size='220' shape='circle' :src='scope.row.avatar'></el-avatar>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="time" width="240">
      </el-table-column>
      <el-table-column align="right" prop="actionTime" width="160">
        <template #default="scope">
          <input type="text" v-model="scope.row.actionTime" class="ipt" style="  text-align: center;" >
        </template>
      </el-table-column>
      <el-table-column align="right" width="320">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleDetails(scope.row),dialogVisible=true"
          >查看详情
          </el-button
          >
          <el-button link type="primary" size="small">修改</el-button>
          <el-button link type="primary" size="small" @click="handleDelete(scope.$index)"
          >删除
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        v-model="dialogVisible"
        width="40%"
        style="color: black;border-radius: 10px;border: royalblue solid 2px;background-color:#fceab9"
    >
      <template #header>
      </template>
      <span>
          <el-avatar class='user-avatar' style="width: 80px;height: 80px" shape='circle'
                     :src='dialogData.avatar'></el-avatar>
          <label
              style=" font-size: 20px;float: right;margin-top: 6%;font-weight: bolder;background-color: #fe9292;width: 30%;padding-left: 20px;border-radius: 15px  0 0 15px">违规{{
              dialogData.actionTime
            }}</label>
      </span>
      <p>
        ID:{{ dialogData.ID }}
        <br>
        用户名:{{ dialogData.username }}
        <br>
        姓名:{{ dialogData.name }}
        <br>
        手机号码:{{ dialogData.phone }}
        <br>
        违规站点::{{ dialogData.siteName }}
      </p>
    </el-dialog>
  </div>
  <!-- 分页器 -->
  <div style="margin-top:0;">
    <el-pagination align='center' @current-change="handleCurrentChange"
                   class="pagination"
                   v-model:current-page="currentPage"
                   :page-size="pageSize"
                   background
                   small
                   layout=" prev, pager, next, jumper"
                   :total="tableData.length">
    </el-pagination>
  </div>
</template>
<style>
.el-dialog__body {
  padding-left: 20px;
  padding-right: 0;
}
.ipt{
  border: 0;
  background-color: transparent;
}
.el-pagination.is-background .el-pager li.is-active {
  background-color: #ffb800 !important;
  color: black;
}

.el-pagination.is-background .btn-prev,
.el-pagination.is-background .btn-next {
  background-color: transparent !important;
}

.el-pagination__editor.el-input {
  width: 56px;
  background: #fceab9 !important;
}

.el-pagination.is-background .el-pager li {
  background-color: #fceab9 !important;
  color: black !important;
}

.el-table {
  width: 90%;
  --el-table-header-border: 15px;
  --el-table-tr-bg-color: #fceab9;
  --el-table-header-bg-color: #fceab9;
  --el-table-border-color: gray;
  --el-table-border: gray solid 1px;
  --el-table-text-color: black;
  --el-table-header-text-color: white;
  --el-table-row-hover-bg-color: #ac9673;
  --el-table-current-row-bg-color: var(--el-color-primary-light-9);
  --el-table-fixed-box-shadow: var(--el-box-shadow-light);
  --el-table-bg-color: var(--el-fill-color-blank);
  --el-table-expanded-cell-bg-color: var(--el-fill-color-blank);
  --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(0, 0, 0, 0.15);
  --el-table-index: var(--el-index-normal);
}
</style>
<style scoped>
.table-header {
  overflow: hidden;
  width: 90%;
  border-radius: 25px;
  display: flex;
  margin-left: 5%;
  color: white;
  background: #ac9673;
  align-content: center;
  padding-left: 1%;
  justify-content: space-between
}

.pagination {
  margin: 3rem auto;
  display: flex;
  justify-content: center;
}

.elTable {
  margin-left: 5%;
  background: transparent;
}

.table {
  background-color: #fceab9;
  border-radius: 30px;
}

.button {
  font-weight: normal;
  width: 9vw;
  height: 6vh;
  border-radius: 10vw;
  background-color: transparent;
  border: black solid 2px;
  overflow: hidden;
}

.input_box {
  width: 45vw;
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
  overflow: hidden;
  width: 10vw;
  margin: 5px;
  background: #ac9673;
  border-radius: 95px;
  color: white;
  border: 0;
  box-shadow: 0 0 0 0px;
}

</style>