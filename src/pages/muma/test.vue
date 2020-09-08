<template>
  <div class="content">
    <!-- <div>gkhlhklhkljhkljhlkjhkljhkljh</div> -->
    <!-- <iframe src="../../static/Cron/index.htm" frameborder="0" ></iframe> -->
    <div class="title" :class="{active:isShow == index,active1:isShow1}" v-for="(item,index) in dataList1" :key="index">
      <div class="top" @click="clickName(index)">{{item.name}}</div>
      <div class="center" v-show="isShow == index">
        <div style="height:100%">{{item.content}}</div>
      </div>
    </div>
    <!-- <div>afdsaldfhasjkdhfsahkdfasjhdfisahdfnlasdfiusjdjflsidufksdfjlas</div> -->
  </div>
</template>
<script>
export default {
  name: "test",
  data(){
    return {
      dataList:[
        {name:"泰康人首页",content:"泰康人首页萨芬萨芬泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和泰康人首页萨芬萨芬和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和和速芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬芬度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和",id:1},
        {name:"上帝会",content:"上帝会萨芬萨芬和速度话啊说得好u回答送到萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和和",id:2},
        {name:"士第哦啊所以",content:"士第哦啊所以萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和dfggadssag",id:3},
        {name:"法术和1",content:"法术和1萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和sffffff",id:4},
        {name:"法术和2",content:"法术和2萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和萨芬萨芬和速度话啊说得好u回答送到和srg",id:4},
      ],
      isShow:-1,
      dataList1: [],
      isShow1:false,
    }
  },
  mounted(){
    this.dataList.forEach((item)=>{
      this.dataList1.push(item)
    })
  },
  methods:{
    clickName(index){
      if(index > 0){
        this.dataList1.splice(0,index);
        this.isShow = 0;
        // this.dataList1 = this.dataList;
        if(this.dataList1.length==1){
          this.isShow1=true
        }
      }else{
         this.isShow1=false
          this.dataList1=[]
          this.dataList.forEach((item)=>{
            this.dataList1.push(item)
          })
          this.isShow=this.isShow==index?-1:index;
      }
    }
  }
}
</script>
<style scoped>
.content {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.title {
  background: pink;
  width: 100%;
  height: 5%;
}
.top {
  display: flex;
  width: 100%;
  height: 37px;
  align-items: center;
  justify-content: center;
  background: palegoldenrod;
}
.center {
  width: 100%;
  height: 95%;
  overflow: auto;
}
.active {
  height: 90%;
}
.active1{
  height: 20%;
}
</style>