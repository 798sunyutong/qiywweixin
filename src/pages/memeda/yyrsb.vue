<template>
    <div id="yyrs">
        <!-- 保险责任 -->
        <div class="item_line selinfo" @click="responsePickerShow=!responsePickerShow">
            <span class="itemName red_words">保险责任</span>
            <img src="" alt="" v-if="!responsePickerShow" @click="responsePickerShow=!responsePickerShow">
            <img src="" alt="" v-else @click="responsePickerShow!=responsePickerShow">
            <span class="bechoiced" :class="{greycolor:!response.rename}">{{response.rename?response.rename:'请选择'}}</span>
        </div>
        <!-- 责任列表 -->
        <div class="repons_cover" v-show="responsePickerShow">
            <ul class="pret_person">
                <li class="pre_list" @click="changePer(item)" v-for="(item,index) in responseColumns" :key='index' :class="{'red_bg':item.show===true ,'itemHide':item.hide===true}"> {{item.rename}}</li>
            </ul>
        </div>
        <!-- 交费相关列表 -->
        <div class="buy_info">
            <!-- 交费方式 -->
            <FormSelect :areaArr="payColumns" selectInfo="交费方式" :showInfo='payChose.Name' @slecteditems='getPayChose'></FormSelect>
            <!-- 交费频率 -->
            <div v-if="payChose.No!='1' && payChose.No">
                <FormSelect :areaArr="payColumns" selectInfo="交费频率" :showInfo='payChose.Name' @slecteditems='getpayType'></FormSelect>
            </div>
            <div class="item_line" v-if="showQualification && openQualifiFlag">
                <span class="itemName">资格号</span>
                <span class="amountNotice"> {{zgNotice}}</span>
                <input type="text" placeholder="请输入资格号" onkeyup="value=value.replace(/[^a-z0-9A-Z]/g,'')" class="froms_input input_with" maxlength='20' v-model="qualification" @blur="handleCheckQuali">
            </div>
            <!-- 年金年交保费 -->
            <div class="item_line" @click="amountPickerShow=true">

            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>