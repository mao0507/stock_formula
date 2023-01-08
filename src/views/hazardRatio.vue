<template lang="pug">
    v-col(cols="12" sm="8")
      v-overlay(:value="overlay")
        v-progress-circular(indeterminate size="64")
      v-card(min-height="80vh" rounded="lg" :dark="isDark")
        v-card-title
          v-icon mdi-apps-box
          span.pl-2 風報比計算
        v-card-text 
          v-container
            v-text-field.my-3(v-bind="Setting.textField" label="停利點" 
            v-model="calculate.Stop_Gain" )
            v-text-field.my-3(v-bind="Setting.textField" label="進場價" 
            v-model="calculate.Entry_price" )
            v-text-field.my-3(v-bind="Setting.textField" label="停損點"
            v-model="calculate.Stop_Loss" )

            v-divider.mb-2

            h3 停利點 : {{calculate.Stop_Gain}}
            br 
            h3 進場價 : {{calculate.Entry_price}}
            br 
            h3 停損點 : {{calculate.Stop_Loss}}
            br
            h3 風報比 :  {{isNaN(Rate_of_risk_return) ? 0 : roundTo(Rate_of_risk_return,6)}}
           
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    isDark: null,
    overlay: true,
    calculate: {
      Stop_Gain: null,
      Stop_Loss: null,
      Entry_price: null,
    },
  }),
  computed: {
    ...mapState(["Setting", "dark"]),
    Rate_of_risk_return() {
      if (this.calculate.Stop_Gain == null) {
        return null;
      }
      if (this.calculate.Stop_Loss == null) {
        return null;
      }
      if (this.calculate.Entry_price == null) {
        return null;
      }

      return (
        (Number(this.calculate.Stop_Gain) -
          Number(this.calculate.Entry_price)) /
        (Number(this.calculate.Entry_price) - Number(this.calculate.Stop_Loss))
      );
    },
  },
  created() {
    //console.log(this.Setting);
  },
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 500);
    this.isDark = this.dark;
    //console.log("isDark", this.isDark);
  },
  watch: {
    "$store.state.dark"(newValue) {
      this.isDark = newValue;
    },
  },
  methods: {
    roundTo(num, count) {
      if (num == null || num == undefined || num == "") {
        //console.log("缺少num參數");
        return null;
      }
      if (count == null) count = 2;

      return +(Math.round(num + "e+" + count) + "e-" + count);
    },
  },
};
</script>
