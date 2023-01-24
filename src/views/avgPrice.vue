<template lang="pug">
   v-col(cols="12" sm="8" md="8" lg="12")
    v-overlay(:value="overlay")
      v-progress-circular(indeterminate size="64")
    v-card(min-height="80vh" rounded="lg" :dark="isDark")
      v-card-title
        v-icon mdi-apps-box
        span.pl-2 均價 / 加碼數量計算
      v-card-text 
        v-container
          v-alert.no-gutters(type="info" dense   hide-details=true) 輸入數量時，單位請保持一致性，使用 {{alertTitle}}
          v-radio-group(v-model="computeType" @change="changeType()" row hide-details=true)
            v-radio(label="均價計算" value="avg")
            v-radio(label="加碼數量計算" value="plus")
          v-text-field.my-3(v-bind="Setting.textField"  label="目前倉位價格" 
          v-model="calculate.Contract_Price" )
          v-text-field.my-3(v-bind="Setting.textField"  :label="currentTitle" v-model="calculate.Contract_USDT")
          v-text-field.my-3(v-bind="Setting.textField" label="加碼價格" 
          v-model="calculate.Plus_Price")
          v-text-field.my-3(v-bind="Setting.textField" :label="overweightTitle" 
          v-model="calculate.Plus_USDT" :disabled="computeType == 'plus'")
          v-text-field.my-3(v-bind="Setting.textField" label="均價" 
          v-model="calculate.AVG_Price" :disabled="computeType == 'avg'")

          v-divider.mb-2

          h3 目前倉位價格 : {{calculate.Contract_Price}}
          br 
          h3 {{currentTitle}} : {{calculate.Contract_USDT}}
          br
          h3 加碼價格 : {{calculate.Plus_Price}}
          br
          h3(v-if="computeType == 'avg'") {{overweightTitle}} : {{calculate.Plus_USDT}}
          h3(v-else) 加碼數量 :  {{compute('Plus_USDT')}}
          br 
          h3(v-if="computeType == 'avg'") 均價 : {{compute('avg_Price')}}
          h3(v-else) 均價 :  {{calculate.AVG_Price}}
          br
          h3(v-if="computeType == 'avg'") {{totalTitle}} : {{compute('avg_USDT')}}




</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    isDark: null,
    overlay: true,
    computeType: "avg",
    calculate: {
      Contract_Price: null,
      Contract_USDT: null,
      Plus_Price: null,
      Plus_USDT: null,
      AVG_Price: null,
      AVG_USDT: null,
    },
  }),
  props: {
    type: String,
  },
  computed: {
    ...mapState(["Setting", "dark"]),
    //提示文字標題
    alertTitle() {
      if (this.type == "twStock" || this.type == "usStock") {
        return "使用 (股數/張數)";
      } else {
        return "使用 (USDT/顆數)";
      }
    },
    //當前倉位標題
    currentTitle() {
      if (this.type == "twStock") {
        return "目前倉位(股數/張數)";
      } else if (this.type == "usStock") {
        return "目前倉位(股數)";
      } else {
        return "目前倉位(USDT/顆數)";
      }
    },
    //加碼標題
    overweightTitle() {
      if (this.type == "twStock") {
        return "加碼數量(股數/張數)";
      } else if (this.type == "usStock") {
        return "加碼數量(股數)";
      } else {
        return "加碼數量(USDT/顆數)";
      }
    },
    //總數標題
    totalTitle() {
      if (this.type == "twStock") {
        return "總股數/張數";
      } else if (this.type == "usStock") {
        return "總股數";
      } else {
        return "總金額/顆數";
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 500);
    this.isDark = this.dark;
    //console.log("isDark", this.isDark);
  },
  methods: {
    //變更模式
    changeType() {
      if (this.computeType == "avg") {
        this.calculate.AVG_Price = null;
      }
      if (this.computeType == "plus") {
        this.calculate.Plus_USDT = null;
      }
    },

    compute(type) {
      //console.log(type);

      if (this.computeType == "avg") {
        if (type == "avg_Price") {
          let Contract_Price =
            this.calculate.Contract_Price == null
              ? 0
              : Number(this.calculate.Contract_Price);

          let Contract_USDT =
            this.calculate.Contract_USDT == null
              ? 0
              : Number(this.calculate.Contract_USDT);

          let Plus_USDT =
            this.calculate.Plus_USDT == null
              ? 0
              : Number(this.calculate.Plus_USDT);

          let Plus_Price =
            this.calculate.Plus_Price == null
              ? 0
              : Number(this.calculate.Plus_Price);

          let n =
            (Contract_Price * Contract_USDT) / (Contract_USDT + Plus_USDT) +
            (Plus_Price * Plus_USDT) / (Contract_USDT + Plus_USDT);

          return isNaN(n) ? 0 : Number(n.toFixed(6));
        }

        if (type == "avg_USDT") {
          let Contract_USDT =
            this.calculate.Contract_USDT == null
              ? 0
              : Number(this.calculate.Contract_USDT);

          let Plus_USDT =
            this.calculate.Plus_USDT == null
              ? 0
              : Number(this.calculate.Plus_USDT);

          let n = Contract_USDT + Plus_USDT;

          return isNaN(n) ? 0 : Number(n.toFixed(6));
        }
      }

      if (this.computeType == "plus") {
        if (type == "Plus_USDT") {
          let Contract_Price =
            this.calculate.Contract_Price == null
              ? 0
              : Number(this.calculate.Contract_Price);

          let Contract_USDT =
            this.calculate.Contract_USDT == null
              ? 0
              : Number(this.calculate.Contract_USDT);

          let AVG_Price =
            this.calculate.AVG_Price == null
              ? 0
              : Number(this.calculate.AVG_Price);

          let Plus_Price =
            this.calculate.Plus_Price == null
              ? 0
              : Number(this.calculate.Plus_Price);

          let n;
          if (AVG_Price != 0) {
            n =
              (AVG_Price * Contract_USDT - Contract_Price * Contract_USDT) /
              (Plus_Price - AVG_Price);
          } else {
            null;
          }

          return isNaN(n) ? 0 : Number(n);
        }
      }
    },
  },

  watch: {
    "$store.state.dark"(newValue) {
      this.isDark = newValue;
    },
  },
};
</script>
