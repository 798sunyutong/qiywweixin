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
    .bottom .bottomTitle {
        font-size: 22px;
        color: #000;
        line-height: 38px;
        padding-left: 20px;
    }
    .bottom .bottomTable {
        flex: 1;
        flex-shrink: 1;
        height: 0;
        /* overflow-y:auto; */
        /* background-color: #fff; */
    }
    .bottom >>> .tableSelf {
        height: 100% !important;
        overflow-y:auto;
    }
  .bottom >>> .el-table {
        border: 1px solid #242b42;
    } 
</style>