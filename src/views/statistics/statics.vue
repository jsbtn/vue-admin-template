<template>
  <div class="content-transparent ">
    <div class="navbar_fixed">
      <fixedBar @change="watch_dataChange"></fixedBar>
    </div>
    <div class="fiexd_content">
      <div class="wplane  paddingAll">
        <lineChart ref="lineChart"></lineChart>
      </div>
      <div class="wplane  paddingAll">
        <div class="flex_rowBetwen">
          <h6>数据列表</h6>
          <span>
            <el-button size="mini" type="primary" icon="el-icon-plus" plain>新增渠道</el-button>
          </span>
        </div>
        <el-table :data="tableData">
          <el-table-column prop="name" align="center" label="日期">
          </el-table-column>
          <el-table-column prop="address" align="center" label="渠道名称">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.switch"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="address" align="center" label="浏览次数PV">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.lang"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="address" align="center" label="独立访客UV">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.lang"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="address" align="center" label="IP">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.lang"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="address" align="center" label="访问数VV">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.lang"></el-switch>
            </template>
          </el-table-column>
                <el-table-column prop="address" align="center" label="二跳PV">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.lang"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="address" align="center" label="二跳UV">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.lang"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="address" align="center" label="跳出率">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.lang"></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="address" align="center" label="操作">
            <template slot-scope="scope">
              <img src="@/assets/images/menue/statics.png" >
              <img src="@/assets/images/menue/statics.png" >
              <img src="@/assets/images/menue/statics.png" >
            </template>
          </el-table-column>
        </el-table>
        <div class="flex_center margin_t">
          <pagination style="margin:0 auto;" v-show="total>0" :total="total" :page.sync="listQuery.page" @pagination="getList" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import fixedBar from './components/fixedBar'
import Pagination from '@/components/Pagination'
import lineChart from '@/components/charts/lineChart'
export default {
  name: 'channelStatics',
  components: {
    fixedBar,
    Pagination,
    lineChart
  },
  data() {
    return {
      total:100,
      listQuery:{

      }
    }
  },
  mounted() {},
  methods: {
    // 监听顶部data改变
    watch_dataChange(data) {

    }
  }
};

</script>
<style scoped>
._title {
  line-height: 30px;
}

</style>
