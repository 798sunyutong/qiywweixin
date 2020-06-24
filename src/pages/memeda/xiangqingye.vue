<template>
  <div class="ke-alern">
      <!-- 详情页 -->
    <!-- 自己写的 -->
    <!-- <iframe :src="this.huokeurl" class="alern-img"></iframe> -->
    <!-- <iframe :src="huokeurl" class="alern-img"></iframe> -->
    <!-- 结束 -->

    <!-- 新宇修改的 -->
    <img class="alern-img" :src="dateilImg" alt="">
    <!-- 结束 -->
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
import loading from '@/components/loading'
// 自己写的
// let Base64=require('js-base64').Base64
//结束

// 新宇新增的
import {getParameter,shareWX} from '../../util/util'
import { qywxShare } from '../../util/qywxPublicShare.js'
// 结束
export default {
    name:'xiangqingye',
    data() {
        return {
            loading:false,
            huokeurl:'',
            // 新宇新增的
            activeProductInfo:null,
            companyCode:'',//公司码
            userId:'',//代理人工号
            // 结束
        }
    },
    components:{
        loading
    },
    created() {
        //自己写的
        // document.title='活动',
        // this.huokeurl=Base64.decode(this.$route.query.src)
        //结束

        //新宇修改的
        const ua=window.navigator.userAgent.toLowerCase()   
        let source;
        let channelUntil;
        let oauthUrl;   
        if(ua.match(/wxwork/i)=='wxwork'){
            //企业微信环境
            this.userId=getParameter('userId')
            //产品分享到信息
            this.activeProductInfo=JSON.parse(sessionStorage.getItem('activeProductInfo'))
            document.title=this.activeProductInfo.productName
            const productCode=this.activeProductInfo.productName
            this.detailImg=this.activeProductInfo.imgUrlB
            if(productCode==="YWZD"){
                // 养娃账单
                this.detailImg=require('./img/meiyoutupianxiaxiede.png')
            }else if(productCode==='FHBL'){
                //红包活动
                this.detailImg=require('./img/meiyoutupianxiaxiede.png')
            }else if(productCode==='SHXK'){
                //泰康2020
                this.detailImg=require('./img/meiyoutupianxiaxiede.png')
            }
            let _this=this
            source='1'
            //记录轨迹方法
            INTEROP && 
            INTEROP.requestTargetKey({
                source:source, //1代表企业微信，0代表泰行销，不传默认是泰行销
                shareUrl:this.activeProductInfo.sharePageUrl,
                staffNumber:`${this.activeProductInfo.channel}_${this.activeProductInfo.companyCode}_${this.userId}` //渠道公司码工号
            })
            .then(function(){
                oauthUrl=INTEROP.getShareUrl(_this.activeProductInfo.sharePageUrl); //获取oauthUrl链接
                // 分享的方法
                qywxShare({
                    title:_this.activeProductInfo.shareTitle,
                    desc:_this.activeProductInfo.shareText,
                    shareImageURL:_this.activeProductInfo.shareImgUrl,
                    shareLink:oauthUrl,//分享链接
                    shareParamName:[],
                    blankPathConfig:"/workWechatEsales/xiaxiedeshare.html",
                    appShare:false,
                    menu:['menuItem:share:appMessage'],//分享途径 默认分享到企业微信
                    isPC:false,//pc为true 侧边栏
                    flagName:"",
                    flagId:""
                })
            })
        } else if(ua.match(/isales/i)=='isales'){
            // 泰行销环境
            document.title='养娃账单'
            source='0'
            // 泰行销环境
            this.handleGetUserInfo()
            //记录轨迹方法
            INTEROP && 
            INTEROP.requestTargetKey({
                source:source, //1代表企业微信，0代表泰行销，不传默认是泰行销
                shareUrl:`${
                    window.Location.origin
                }/esales/index.html#/CashLoading`,
                staffNumber:`${this.channel}_${this.companyCode}_${this.userId}` //渠道公司码工号
            })
            .then(function(){
                oauthUrl=INTEROP.getShareUrl(`${
                    window.Location.origin
                }/esales/index.html#/CashLoading`); //获取oauthUrl链接
                // 分享的方法
                shareWX({
                    shareUrl:oauthUrl,//分享链接
                    shareTitle:'abdlshadfiusaiofhsihf',//分享的title
                    shareType:[`onShareMenuFriend`],//onShareMenuFriend表示微信，onShareMenuTimeline表示朋友圈
                    shareBitmap:`${window.location.origin}workWechatEslaes/static/shareImg/sharetubiao.png`,
                    shareIntorduce:'这份扎心的账单。有孩子的人才懂',//分享简介
                })
            })
        }
        //结束
    },
    // 新宇新增
    methods: {
        shareInit(){

        },
        handleGetUserInfo(){
            let _this=this
            if(!window.ISALES){
                return
            }
            window.ISALES.callApp("getUserInfoByNative",{
                callback:_this.getUserInfoName
            })
        },
        getUserInfoName(res){
            if(res.code==='0'){
                this.userId=res.msg.userCode
                this.companyCode=res.msg.companyCode
                this.channel=res.msg.channel
                if(res.msg.companyCode==='G' && res.msg.agntbr==='60'){
                    this.companyCode=`${res.msg.companyCode}-60`
                }
            }
        }
    },
    //结束

}
</script>

<style lang="stylus" scoped>
.ke-alern
    width 750px
    height 1357px
    .alern-img
        width 750px
        height 1357px
</style>