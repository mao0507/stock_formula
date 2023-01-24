<template lang="pug">
    v-col(cols="12" sm="8" md="8" lg="12")
      v-overlay(:value="overlay")
        v-progress-circular(indeterminate size="64")
      v-card(min-height="80vh" rounded="lg" :dark="dark")
        v-card-title
          v-icon mdi-apps-box
          span.pl-2 歡迎頁面
        v-card-text
          v-container
            //- h3 目前分為股票，加密貨幣兩大類別
            //- br
            //- h3 主要是因為不同種類，基本使用的單位換算不同，因此做出區隔
            //- br
            //- h3


            h3 紀錄了一些，股票 / 加密貨幣 可以使用到的計算公式
            br
            h3 1. 加密貨幣 
            br 
            h3(style="text-indent: 1em;") 
              span *  
                a(href="javascript:void(0)" @click="go('cryptocurrency','enterPoint')")  進場點計算 
            br
            h3(style="text-indent: 1em;")
              span * 
                a(href="javascript:void(0)" @click="go('cryptocurrency','hazardRatio')")  風報比計算
            br 
            h3(style="text-indent: 1em;") 
              span * 
                a(href="javascript:void(0)" @click="go('cryptocurrency','openPosition')")  開倉位置計算
            br 
            h3(style="text-indent: 1em;") 
              span * 
                a(href="javascript:void(0)" @click="go('cryptocurrency','avgPrice')")  均價/加碼數量計算
            br 
            h3 2. 台股
            br
            h3(style="text-indent: 1em;") 
              span * 
                a(href="javascript:void(0)" @click="go('twStock','enterPoint')")  進場點計算
            br
            h3(style="text-indent: 1em;") 
              span * 
                a(href="javascript:void(0)" @click="go('twStock','hazardRatio')")  風報比計算
            br 
            h3(style="text-indent: 1em;") 
              span * 
                a(href="javascript:void(0)" @click="go('twStock','openPosition')")  開倉位置計算
            br 
            h3(style="text-indent: 1em;") 
              span * 
                a(href="javascript:void(0)" @click="go('twStock','avgPrice')")  均價/加碼數量計算
            br 
            h3 3. 美股
            br
            h3(style="text-indent: 1em;") 
              span * 
                a(href="javascript:void(0)" @click="go('usStock','enterPoint')")  進場點計算
            br
            h3(style="text-indent: 1em;") 
              span * 
                a(href="javascript:void(0)" @click="go('usStock','hazardRatio')")  風報比計算
            br 
            h3(style="text-indent: 1em;")  
              span * 
                a(href="javascript:void(0)" @click="go('usStock','openPosition')")  開倉位置計算
            br 
            h3(style="text-indent: 1em;") 
              span * 
                a(href="javascript:void(0)" @click="go('usStock','avgPrice')")  均價/加碼數量計算

 


            
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    overlay: true,
  }),
  props: {},
  components: {},
  computed: {
    ...mapState(["dark"]),
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 500);
  },
  methods: {
    go(type, link) {
      //console.log(type, link);
      this.$router.push("/" + type + "/" + link);
    },
  },
};
</script>
<style></style>
