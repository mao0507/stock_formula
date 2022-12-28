<template lang="pug">
  v-col(cols="12" sm="8")
    v-overlay(:value="overlay")
      v-progress-circular(indeterminate size="64")
    v-card(min-height="80vh" rounded="lg" :dark="isDark")
      v-card-title 
        v-icon mdi-apps-box
        span.pl-2 股東權益報酬率 (ROE) 計算
      v-card-text
        v-container
          v-text-field.my-3(v-bind="textSetting" label="淨資產" v-model="calculate.netAssets") 
          v-text-field.my-3(v-bind="textSetting" label="淨利潤" v-model="calculate.netIncome") 
          

          v-divider.mb-2

          h3 淨資產 ： {{ calculate.netAssets | thousandComma}}
          br
          h3 淨利潤 ： {{calculate.netIncome | thousandComma}}
          br
          h3 淨資產收益率 ： {{ROE + ' %' }}  
        
      
</template>
<script>
export default {
  data: () => ({
    isDark: null,
    overlay: true,
    calculate: {
      netAssets: null,
      netIncome: null,
    },

    textSetting: {
      outlined: true,
      "hide-details": true,
      dense: true,
      type: "number",
      min: 0,
    },
  }),
  computed: {
    ROE() {
      if (this.calculate.netIncome == null || this.calculate.netAssets == null)
        return 0;
      else return (this.calculate.netIncome / this.calculate.netAssets) * 100;
    },
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 500);
    this.isDark = this.$store.state.dark;
    console.log("isDark", this.isDark);
  },
  watch: {
    "$store.state.dark"(newValue) {
      this.isDark = newValue;
    },
  },
};
</script>
