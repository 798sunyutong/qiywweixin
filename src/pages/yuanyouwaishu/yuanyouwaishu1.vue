<template>
  <div class="home">
    <vxe-table
      border
      resizable
      show-overflow
      :data="tableData"
      :span-method="rowspanMethod"
      :edit-config="{trigger: 'click', mode: 'cell'}"
      class="wwidth"
      @cell-click="ddd()"
      >
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="date1" title="单元类型*" :edit-render="{name: 'input', attrs: {type: 'text'}}"></vxe-table-column>
      <vxe-table-column field="date2" title="节点编号" :edit-render="{name: 'input', attrs: {type: 'text'}}"></vxe-table-column>
      <vxe-table-column field="date3" title="节点名称" :edit-render="{name: 'input', attrs: {type: 'text'}}"></vxe-table-column>
      <vxe-table-column field="nickname" title="节点范围与描述" :edit-render="{name: 'input', attrs: {type: 'text'}}"></vxe-table-column>
      <vxe-table-column field="num1" title="检查项编号*" :edit-render="{name: '$input', props: {type: 'float', digits: 2}}"></vxe-table-column>
      <vxe-table-column field="date12" title="主要风险" :edit-render="{name: '$input', props: {type: 'date'}}"></vxe-table-column>
      <vxe-table-column field="date13" title="初始风险后果等级" :edit-render="{name: '$input', props: {type: 'week'}}"></vxe-table-column>
      <vxe-table-column field="date14" title="初始风险发生可能性" :edit-render="{name: '$input', props: {type: 'week'}}"></vxe-table-column>
      <vxe-table-column field="date15" title="检查项描述*" :edit-render="{name: '$input', props: {type: 'week'}}"></vxe-table-column>
      <vxe-table-column field="date16" title="保护层类型" :edit-render="{name: '$input', props: {type: 'week'}}"></vxe-table-column>
      <vxe-table-column field="date17" title="风险降低倍数" :edit-render="{name: '$input', props: {type: 'week'}}"></vxe-table-column>
      <vxe-table-column field="date18" title="检查依据*" :edit-render="{name: '$input', props: {type: 'week'}}"></vxe-table-column>
      <vxe-table-column field="date19" title="检查项评分" :edit-render="{name: '$input', props: {type: 'week'}}"></vxe-table-column>
    </vxe-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {id: 10001,date1:"原油进站阀组",date2:"S1-1",date3:"原油进站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T1'},
        {id: 10002,date1:"原油进站阀组",date2:"S1-1",date3:"原油进站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T2'},
        {id: 10003,date1:"原油进站阀组",date2:"S1-1",date3:"原油进站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T3'},
        {id: 10004,date1:"原油进站阀组",date2:"S1-1",date3:"原油进站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T4'},
        {id: 10005,date1:"原油进站阀组",date2:"S1-1",date3:"原油进站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T5'},
        {id: 10006,date1:"原油进站阀组",date2:"S1-1",date3:"原油进站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T6'},
        {id: 10007,date1:"原油进站阀组",date2:"S1-1",date3:"原油进站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T7'},
        {id: 10008,date1:"原油进站阀组",date2:"S1-1",date3:"原油进站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T8'},
        {id: 10009,date1:"原油进站阀组",date2:"S1-2",date3:"原油出站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T1'},
        {id: 100010,date1:"原油进站阀组",date2:"S1-2",date3:"原油出站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T2'},
        {id: 100011,date1:"原油进站阀组",date2:"S1-2",date3:"原油出站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T3'},
        {id: 100012,date1:"原油进站阀组",date2:"S1-2",date3:"原油出站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T4'},
        {id: 100013,date1:"原油进站阀组",date2:"S1-2",date3:"原油出站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T5'},
        {id: 100014,date1:"原油进站阀组",date2:"S1-2",date3:"原油出站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T6'},
        {id: 100015,date1:"原油进站阀组",date2:"S1-2",date3:"原油出站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T7'},
        {id: 100016,date1:"原油进站阀组",date2:"S1-2",date3:"原油出站阀组",date4:"",date5:"",date6:"",date7:"",date8:"",date9:"", nickname: 'T8'},
      ],
     
    }
  },
  mounted() {
    
  },
  methods: {
   // 通用行合并函数（将相同多列数据合并为一行）
    rowspanMethod ({ row, _rowIndex, column, visibleData }) {
      let fields = ['date1','date2','date3']
      let cellValue = row[column.property]
      if (cellValue && fields.includes(column.property)) {
        let prevRow = visibleData[_rowIndex - 1]
        let nextRow = visibleData[_rowIndex + 1]
        if (prevRow && prevRow[column.property] === cellValue) {
          return { rowspan: 0, colspan: 0 }
        } else {
          let countRowspan = 1
          while (nextRow && nextRow[column.property] === cellValue) {
            nextRow = visibleData[++countRowspan + _rowIndex]
          }
          if (countRowspan > 1) {
            return { rowspan: countRowspan, colspan: 1 }
          }
        }
      }
    },
    ddd(){
      console.log('4444444444444')
    }
  }
}
</script>
<style scoped>

.home{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.spread-host {
  width: 100%;
  height: 800px
}
/* .wwidth{
  width: 200px;
} */
</style>


