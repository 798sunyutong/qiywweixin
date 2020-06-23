<template>
  <div class="ke-alern">
      <!-- 详情页 -->
    <!-- <iframe :src="this.huokeurl" class="alern-img"></iframe> -->
    <iframe :src="huokeurl" class="alern-img"></iframe>
    <loading v-show="loading"></loading>
  </div>
</template>

<script>
import loading from '@/components/loading'
let Base64=require('js-base64').Base64
export default {
    name:'xiangqingye',
    data() {
        return {
            loading:false,
            huokeurl:'',
        }
    },
    components:{
        loading
    },
    created() {
        document.title='活动',
        this.huokeurl=Base64.decode(this.$route.query.src)
    },
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