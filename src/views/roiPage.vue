<template lang="pug">
  v-col(cols="12" sm="8" md="8" lg="12")
    v-overlay(:value="overlay")
      v-progress-circular(indeterminate size="64")
    v-card(min-height="80vh" rounded="lg" :dark="isDark")
      v-card-title 
        v-icon mdi-apps-box
        span.pl-2 投資報酬率 (ROI) 計算
      v-card-text
        v-container
          v-text-field.my-3(v-bind="textSetting" label="投資成本" v-model="calculate.cost") 
          v-text-field.my-3(v-bind="textSetting" label="投資的最初價值" v-model="calculate.initPrice") 
          v-text-field.my-3(v-bind="textSetting" label="投資的當前價值" v-model="calculate.lastPrice") 

          v-divider.mb-2

          h3 投資成本 ： {{ calculate.cost | thousandComma}}
          br
          h3 投資的最初價值 ： {{calculate.initPrice | thousandComma}}
          br
          h3 投資的當前價值 ： {{calculate.lastPrice | thousandComma}}
          br
          h3 總投資報酬率 ： {{ROI + ' %' }}  
        
      
</template>
<script>
export default {
  data: () => ({
    isDark: null,
    overlay: true,
    calculate: {
      cost: null,
      initPrice: null,
      lastPrice: null,
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
    ROI() {
      if (
        !this.calculate.lastPrice ||
        !this.calculate.initPrice ||
        !this.calculate.cost
      )
        return 0;
      else
        return (
          ((this.calculate.lastPrice - this.calculate.initPrice) /
            this.calculate.cost) *
          100
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
