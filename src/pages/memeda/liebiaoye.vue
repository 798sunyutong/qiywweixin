<template>
    <div class="wincustomer">
        <!-- 列表页 (获客)-->
        <div class="hk" v-for="(itemArea,index) in ListDatas" :key="index">
            <!-- 图片列表 -->
            <div class="hk-content">
                <p class="hk-title">{{itemArea.productName}}</p>
                <div class="hk-image">
                    <img :src="itemArea.imgUrlB" alt="" @click="Goto(itemArea.sharePageUrl)">
                </div>
                <p class="hk-text">{{itemArea.shortName}}</p>
            </div>
            <div class="hk-bottom clearfix">
                <!-- 查看更多 -->
                <div class="total" v-show="Boolean(itemArea.counts)">已有
                    <span class="tatal_num">{{itemArea.counts}}</span>人参与
                </div>
                <div class="btn" @click="Goto(itemArea.sharePageUrl)">查看更多</div>
            </div>
        </div>
        <loading v-show="loading"></loading>
    </div>
  
</template>

<script>
import loading from 'loading'
import {getparameter} from 'util/util'
let Base64 =require('js-base64').Base64

export default {
name:'liebiaoye',
data() {
    return {
        ListDatas:[],
        loading:false,
        imgUrl:'',
        userId:''
    }
},
components:{
    loading
},
created() {
    this.userId=getparameter('userId')||'22013698'
    this.HtmlList(),
    document.title="获客"
    
},
methods: {
  Goto:function(sharePageUrl){
    //   图片利用Base64进行编解码，encode是编码，decode是解码
      this.imgUrl=Base64.encode(sharePageUrl)
      this.$router.push({
          path:'xiangqingye',
          query:{
              url:'rrrr',
              src: this.imgUrl,
          }
      })
  } ,
    HtmlList(){
        let _this=this
        this.$ajax.get('/temlmall/activity/dizhi',{
                params:{
                    userId:this.userId
                }
            }).then(function(res){
                if(res.data.data.success==="true"){
                    _this.ListDatas=res.data.data.info
                    // 下面的for循环可以单独获取到后台返回来的数组里的某个数据，在此页面中无任何意义
                    // for(let i=0;i<_this.ListDatas.length;i++){
                    //     let huokeurl
                    //     huokeurl=_this.ListDatas[i].sharePageUrl
                    // }
                }
            }).catch(function(error){
                console.log(error)
            })
    }
    
},
}
</script>

<style>

</style>