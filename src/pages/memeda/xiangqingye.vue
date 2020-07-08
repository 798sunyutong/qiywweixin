<template>
  <div class="ke-alern">
      <!-- 详情页 -->
    <!-- 自己写的 -->
    <!-- <iframe :src="this.huokeurl" class="alern-img"></iframe> -->
    <!-- <iframe :src="huokeurl" class="alern-img"></iframe> -->
    <!-- 结束 -->

    <!-- 新宇修改的 -->
    <!-- <img class="alern-img" :src="dateilImg" alt=""> -->
    <!-- 结束 -->
    <!-- <loading v-show="loading"></loading> -->
  </div>
</template>

<script>
// import loading from '@/components/loading'
// // 自己写的
// // let Base64=require('js-base64').Base64
// //结束

// // 新宇新增的
// import {getParameter,shareWX} from '../../util/util'
// import { qywxShare } from '../../util/qywxPublicShare.js'
// import { txxSharePanel } from '@assets/js/txxSharePanel.js'
// // 结束
// export default {
//     name:'xiangqingye',
//     data() {
//         return {
//             loading:false, 
//             // huokeurl:'',自己写的
//             // 新宇新增的
//             dateilImg:"",
//             activeProductInfo:null,
//             companyCode:'',//公司码
//             userId:'',//代理人工号
//             staffNumber:'',
//             // 结束
//         }
//     },
//     components:{
//         loading
//     },
//     created() {
//         //自己写的
//         // document.title='活动',
//         // this.huokeurl=Base64.decode(this.$route.query.src)
//         //结束

//         //新宇修改的
//         const ua=window.navigator.userAgent.toLowerCase()   
//         let source,channelUntil,oauthUrl,shareInf={};
//         if(ua.match(/wxwork/i)=='wxwork'){
//             //企业微信环境
//             this.userId=getParameter('userId')
//             //产品分享到信息
//             this.activeProductInfo=JSON.parse(sessionStorage.getItem('activeProductInfo'))
//             document.title=this.activeProductInfo.productName
//             const productCode=this.activeProductInfo.productName
//             this.detailImg=this.activeProductInfo.imgUrlB
//             if(productCode==="YWZD"){
//                 // 养娃账单
//                 this.detailImg=require('./img/shaya.png')
//             }else if(productCode==='FHBL'){
//                 //红包活动
//                 this.detailImg=require('./img/shaya.png')
//             }else if(productCode==='SHXK'){
//                 //泰康2020
//                 this.detailImg=require('./img/shaya.png')
//             }
//             let _this=this
//             source='1'
//             //记录轨迹方法
//              shareInf.shareTitle=_this.activeProductInfo.shareTitle
//              shareInf.shareText=_this.activeProductInfo.shareText
//              shareInf.shareImgUrl=_this.activeProductInfo.shareImgUrl
//              shareInf.sharePageUrl=_this.activeProductInfo.sharePageUrl
//              shareInf.shareWebpageUrl="" 
//              this.handleInteropInit(shareInf)
//             INTEROP && 
//             INTEROP.requestTargetKey({
//                 source:source, //1代表企业微信，0代表泰行销，不传默认是泰行销
//                 shareUrl:this.activeProductInfo.sharePageUrl,
//                 staffNumber:`${this.activeProductInfo.channel}_${this.activeProductInfo.companyCode}_${this.userId}` //渠道公司码工号
//             })
//             .then(function(){
//                 oauthUrl=INTEROP.getShareUrl(_this.activeProductInfo.sharePageUrl); //获取oauthUrl链接
//                 // 分享的方法
//                 qywxShare({
//                     title:_this.activeProductInfo.shareTitle,
//                     desc:_this.activeProductInfo.shareText,
//                     shareImageURL:_this.activeProductInfo.shareImgUrl,
//                     shareLink:oauthUrl,//分享链接
//                     shareParamName:[],
//                     blankPathConfig:"/workWechatEsales/xiaxiedeshare.html",
//                     appShare:false,
//                     menu:['menuItem:share:appMessage'],//分享途径 默认分享到企业微信
//                     isPC:false,//pc为true 侧边栏
//                     flagName:"",
//                     flagId:""
//                 })
//             })
//         } else if(ua.match(/isales/i)=='isales'){
//             // 泰行销环境 只挂养娃账单         
//             source='0'
//             // 泰行销环境
//             let codeId=getParameter('codeId')
//             if(codeId==='YWZD'){
//                 document.title='养娃账单'
//                 this.detailImg=require('./img/shaya.png')
//                 this.handleGetUserInfo().then(()=>{
//                     shareInf.shareTitle="我养的不事娃，是碎炒机"
//                     shareInf.shareText="这份扎心的账单。有孩子的人才懂"
//                     shareInf.shareImgUrl=`${window.location.origin}workWechatEslaes/static/shareImg/sharetubiao.png`
//                     shareInf.sharePageUrl=`${
//                     window.Location.origin
//                 }/esales/index.html#/CashLoading`
//                     shareInf.shareWebpageUrl="" 
//                     this.handleInteropInit(shareInf)
//                     this.handleInterop()
//                 })
//             }
//         }
//         //结束
//     },
//     // 新宇新增
//     methods: {
//         shareInit(){
//             //泰行销智能分享面板初始化
//             const baseMenus=['0','1'];//分享给朋友或朋友圈
//             const othersMenus=['9'];//刷新按钮
//             const productOpt={
//                 friends:{
//                     secret:"",// 16位以内密钥，字母或数字
//                     shareUrl:`${window.location.origin}/esales/index.html#/CashLoading`,//分享地址
//                     shareTitle:'我养的不是娃，是碎炒机',
//                     shareBitmap:`${window.location.origin}/workWechatEsales/static/shareImg/sharetibioa.png`,//分享图片的URL
//                     shareIntorduce:'这份扎心的账单，有孩子的人才能懂！',//分享简介
//                 },
//                 moments:{
//                     secret:"",// 16位以内密钥，字母或数字
//                     shareUrl:`${window.location.origin}/esales/index.html#/CashLoading`,//分享地址
//                     shareTitle:'我养的不是娃，是碎炒机',
//                     shareBitmap:`${window.location.origin}/workWechatEsales/static/shareImg/sharetibioa.png`,//分享图片的URL
//                     shareIntorduce:'这份扎心的账单，有孩子的人才能懂！',//分享简介
//                 }
//             }
//             txxSharePanel(baseMenus,othersMenus,productOpt)
//         },
//         handleInterop(){
//             let _this=this
//             INTEROP && INTEROP.requestTargetKey({
//                 source:'0',//1代表企业微信，0代表泰行销，不传默认为0泰行销
//                 shareUrl:`${window.location.origin}/esales/index.html#/CashLoading`,
//                 staffNumber:this.staffNumber //渠道——公司码——工号
//             }).then(function(){
//                 let oauthUrl=INTEROP.getShareUrl(`${window.location.origin}/esales/index.html#/CashLoading`);//获取oa链接
//                 _this.shareInit()
//             })
//         },
//         handleGetUserInfo(){
//             let _this=this
//             return new Promise((resolve,reject)=>{
//                 if(!window.ISALES){
//                     return
//                 }
//                 window.ISALES.callApp("getUserInfoByNative",{
//                     callback:function(res){
//                         if(res.code==='0'){
//                             _this.userId=res.msg.userCode
//                             _this.companyCode=res.msg.companyCode
//                             _this.channel=res.msg.channel
//                             _this.staffNumber=res.msg.staffNumber
//                             if(res.msg.companyCode==='G' && res.msg.agntbr==='60'){
//                                 _this.companyCode=`${res.msg.companyCode}-60`
//                             }
//                             resolve(_this.staffNumber)
//                         }else{
//                             reject(res)
//                         }
//                     }
//                 })
//             })           
//         },
//         getUserInfoName(res){
//             if(res.code==='0'){
//                 this.userId=res.msg.userCode
//                 this.companyCode=res.msg.companyCode
//                 this.channel=res.msg.channel
//                 if(res.msg.companyCode==='G' && res.msg.agntbr==='60'){
//                     this.companyCode=`${res.msg.companyCode}-60`
//                 }
//             }
//         },
//         handleInteropInit(proInfo){
//            INTEROP &&
//            INTEROP.init({
//                 shareTitle:proInfo.shareTitle,
//                 shareIntorduce:proInfo.shareText,
//                 shareBitmap:proInfo.shareImgUrl,
//                 shareUrl:proInfo.sharePageUrl,
//                 shareWebpageUrl:''
//            })
//         },
//     },
//     //结束

// }
// </script>

// <style lang="stylus" scoped>
// .ke-alern
//     width:100%
//     // width 750px
//     // height 1357px
//     .alern-img
//         width:100%
//         // width 750px
//         // height 1357px
// </style>