<template>
  <div class="content-transparent ">
    <div class="navbar_fixed">
      <fixedBar @change="watch_dataChange"></fixedBar>
    </div>
    <div class="fiexd_content">
      <div class="wplane  paddingAll">
        <div class="flex_rowBetwen">
          <h6>数据列表</h6>
          <span>
            <el-button @click="dialogVisible = true" size="mini" type="primary" icon="el-icon-plus" plain>新增渠道</el-button>
          </span>
        </div>
        <el-table :data="tableData">
          <el-table-column prop="name" align="center" label="日期">
          </el-table-column>
          <el-table-column prop="address" align="center" label="渠道名称">
          </el-table-column>
          <el-table-column prop="address" align="center" label="浏览次数PV">
          </el-table-column>
          <el-table-column prop="address" align="center" label="独立访客UV">
          </el-table-column>
          <el-table-column prop="address" align="center" label="IP">
          </el-table-column>
          <el-table-column prop="address" align="center" label="访问数VV">
          </el-table-column>
          <el-table-column prop="address" align="center" label="二跳PV">
          </el-table-column>
          <el-table-column prop="address" align="center" label="二跳UV">
          </el-table-column>
          <el-table-column prop="address" align="center" label="跳出率">
          </el-table-column>
          <el-table-column prop="address" align="center" label="操作">
            <template slot-scope="scope">
              <span class="hover">
                <img src="@/assets/images/menue/statics.png">
                <!-- <img src="@/assets/images/menue/statics-act.png" > -->
              </span>
              <span class="hover">
                <img src="@/assets/images/menue/paperclip.png">
                <!-- <img src="@/assets/images/menue/paperclip-act.png" > -->
              </span>
              <span class="hover">
                <img src="@/assets/images/menue/delete.png">
                <!-- <img src="@/assets/images/menue/delete-act.png" > -->
              </span>
            </template>
          </el-table-column>
        </el-table>
        <div class="flex_center margin_t">
          <pagination style="margin:0 auto;" v-show="total>0" :total="total" :page.sync="listQuery.page" @pagination="getList" />
        </div>
      </div>
    </div>
    <el-dialog title="新增渠道" :visible.sync="dialogVisible" width="600px" :before-close="handleClose">
      <div>
        <div class="flex_rowBetwen">
          <span  class="margin_t" style="width:90px;">渠道名称 </span>
          <el-input placeholder="请输入搜索内容">
          </el-input>
        </div>
        <div class="flex_rowBetwen margin_t">
          <el-radio-group v-model="radio">
            <el-radio class="margin_t" :label="3">页面</el-radio>
            <el-radio class="margin_t" :label="6">产品</el-radio>
            <el-radio class="margin_t" :label="9">文章</el-radio>
          </el-radio-group>
          <el-input style="width:250px" placeholder="请输入搜索内容" v-model="input4">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <el-radio-group class="margin_t" v-model="listQuery.resource" style="width: 100%" size="medium">
          <el-table :data="tableData" border style="width: 70%">
            <el-table-column prop="date" align="center" width="50">
              <template slot-scope='scope'>
                <el-radio ></el-radio>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="页面标题">
            </el-table-column>
          </el-table>
        </el-radio-group>
      </div>
      <div slot="footer" class="dialog-footer t_c">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = true">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="渠道详情" :visible.sync="dialogVisible2" width="600px" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="渠道名称：">
          产品标题-今日头条投放广告
        </el-form-item>
        <el-form-item label="渠道二维码：">
          <div class="imgInfo">
            <img src="" class="info" >
          </div>
        </el-form-item>
        <el-form-item label="渠道链接地址：">
          https://best.jz.evyun.cn/index.php?pg_id= 122423&user_id=23432
        </el-form-item>
      </el-form>
      <p class="yellow m_info t_c">将二维码或链接投放到相应的渠道即可获取相关推广数据</p>
      <div slot="footer" class="dialog-footer t_c">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import fixedBar from './components/fixedBar'
import Pagination from '@/components/Pagination'

export default {
  name: 'channelStatics',
  components: {
    fixedBar,
    Pagination
  },
  data() {
    return {
      dialogVisible: false,
      dialogVisible2:false,
      total: 100,
      listQuery: {

      },
      radio: '',
      tableData: [
        {
          name: "2016-10-01",
          address: "测试数据",
        },
        {
          name: "2016-10-01",
          address: "测试数据",
        }
      ],
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
<style lang="scss" scoped>
._title {
  line-height: 30px;
}
.margin_t{
  margin-top: 10px;
}
.hover {
  img {
    width: 25px;
  }

}
.yellow{
  color: #FF9900;
}
.info{
  display: inline-block;
  width: 140px; height: 140px;
  background-color: #f1f1f1;
}

</style>
