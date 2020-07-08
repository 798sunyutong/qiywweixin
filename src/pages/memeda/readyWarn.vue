<template>
    <div class="bottom">
        <div class="bottomTitle">
          统计列表
        </div>
        <div class="bottomTable" ref="bottomTable">
            <el-table
              border
              height="200"
              size="mini"
              class="tableSelf"
              :row-class-name="tableRowClassName"
              :header-row-class-name="tableRowClassName"
              style="width: 100%">
              <el-table-column
                type="index"
                label="序列"
                width="80">
              </el-table-column>
              <el-table-column
                prop="meterName"
                label="仪表名称"
                >
              </el-table-column>
              <el-table-column
                prop="number"
                label="数值">
              </el-table-column>
              <el-table-column
                prop="xAxis"
                label="数据获取时间">
              </el-table-column>
              <el-table-column
                prop="number"
                label="数据状态">
              </el-table-column>
            </el-table>
        </div>
        <div class="div1">
          <div class="mask">
              <div class="div2">我是div顶部</div>
          </div>
        </div>
    </div>
</template>
<script>
// import { mapState, mapMutations } from "vuex";
export default {
    name:'ReadyWarn',
    data () {
        return {};
    },
    mounted() {
        
    },
    methods:{
        tableRowClassName({row, rowIndex}) {
            return 'tabRowBgColor'
        },
    },
    computed: {
    
  },
}
</script>
<style scoped>
  .div1{
        width: 400px;
        height:400px;
        background: #ccc;
        position: relative;
    }
    .div2{
        width: 200px;
        height: 400px;
        background: #0099CC;
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .mask{
        width: 200px;
        height: 400px; /* 高度是变量 */
        position: absolute;
        left: 0;
        top: 0; /* top是变量 */
    }
    .mask{
     animation: animate 5s ease infinite;
     overflow: hidden;
      }
      @keyframes animate{
          from {
                height: 0px;
              top : 400px;
          }
          to {
              height: 400px;
              top : 0px;
          }
      }
</style>