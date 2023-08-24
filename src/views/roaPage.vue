<template lang="pug">
  v-col(cols="12" sm="8" md="8" lg="12")
    v-overlay(:value="overlay")
      v-progress-circular(indeterminate size="64")
    v-card(min-height="80vh" rounded="lg" :dark="isDark")
      v-card-title 
        v-icon mdi-apps-box
        span.pl-2 資產報酬率 (ROA) 計算
      v-card-text
        v-container
          v-text-field.my-3(v-bind="textSetting" label="稅後淨利" v-model="calculate.netProfitAfterTax") 
          v-text-field.my-3(v-bind="textSetting" label="總資產" v-model="calculate.totalAssets") 
          

          v-divider.mb-2

          h3 稅後淨利 ： {{ calculate.netProfitAfterTax | thousandComma}}
          br
          h3 平均總資產 ： {{calculate.totalAssets | thousandComma}}
          br
          h3 資產報酬率 ： {{ROA + ' %' }}  
        
      
</template>
<script>
export default {
  data: () => ({
    isDark: null,
    overlay: true,
    calculate: {
      netProfitAfterTax: null,
      totalAssets: null,
    },

    textSetting: {
      outlined: true,
      'hide-details': true,
      dense: true,
      type: 'number',
      min: 0,
    },
  }),
  computed: {
    ROA() {
      if (!this.calculate.netProfitAfterTax || !this.calculate.totalAssets)
        return 0;
      else
        return (
          (this.calculate.netProfitAfterTax / this.calculate.totalAssets) * 100
        );
    },
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 500);
    this.isDark = this.$store.state.dark;
    //console.log("isDark", this.isDark);
  },
  watch: {
    '$store.state.dark'(newValue) {
      this.isDark = newValue;
    },
  },
};
</script>
