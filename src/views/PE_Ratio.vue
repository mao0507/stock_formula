<template lang="pug">
  v-col(cols="12" sm="8")
    v-overlay(:value="overlay")
      v-progress-circular(indeterminate size="64")
    v-card(min-height="80vh" rounded="lg" :dark="isDark")
      v-card-title 
        v-icon mdi-apps-box
        span.pl-2 本益比 (PE Ratio) 計算
      v-card-text
        v-container
          v-text-field.my-3(v-bind="textSetting" label="現在股價" v-model="calculate.price") 
          v-text-field.my-3(v-bind="textSetting" label="每股盈餘" v-model="calculate.eps") 
          

          v-divider.mb-2

          h3 股價 ： {{ calculate.price | thousandComma}} 元
          br
          h3 每股盈餘 ： {{calculate.eps | thousandComma}} 元
          br
          h3 本益比  ： {{PE}}  
        
      
</template>
<script>
export default {
  data: () => ({
    isDark: null,
    overlay: true,
    calculate: {
      price: null,
      eps: null,
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
    PE() {
      if (!this.calculate.price || !this.calculate.eps) return 0;
      else return this.calculate.price / this.calculate.eps;
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
