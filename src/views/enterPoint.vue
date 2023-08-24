<template lang="pug">
    v-col(cols="12" sm="8" md="8" lg="12")
      v-overlay(:value="overlay")
        v-progress-circular(indeterminate size="64")
      v-card(min-height="80vh" rounded="lg" :dark="isDark")
        v-card-title
          v-icon mdi-apps-box
          span.pl-2 進場點計算
        v-card-text 
          v-container
            v-text-field.my-3(v-bind="Setting.textField" label="停利點" 
            v-model="calculate.Stop_Gain" )
            v-text-field.my-3(v-bind="Setting.textField" label="停損點"
            v-model="calculate.Stop_Loss" )

            v-divider.mb-2

            h3 停利點 : {{calculate.Stop_Gain}}
            br 
            h3 停損點 : {{calculate.Stop_Loss}}
            br
            h3 風報比2的進場點 :  {{Rate_of_risk_return(2)}}
            br 
            h3 風報比2.5的進場點 : {{Rate_of_risk_return(2.5)}}
            br 
            h3 風報比3的進場點 : {{Rate_of_risk_return(3)}}



</template>
<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    isDark: null,
    overlay: true,
    calculate: {
      Stop_Gain: null,
      Stop_Loss: null,
    },
  }),
  computed: {
    ...mapState(['Setting', 'dark']),
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

  methods: {
    Rate_of_risk_return(type) {
      if (this.calculate.Stop_Gain == null) {
        return null;
      }
      if (this.calculate.Stop_Loss == null) {
        return null;
      }

      if (type == 2) {
        return Number(
          (
            Number((this.calculate.Stop_Gain - this.calculate.Stop_Loss) / 3) +
            Number(this.calculate.Stop_Loss)
          ).toFixed(6)
        );
      }
      if (type == 2.5) {
        return Number(
          (
            Number(
              (this.calculate.Stop_Gain - this.calculate.Stop_Loss) / 3.5
            ) + Number(this.calculate.Stop_Loss)
          ).toFixed(6)
        );
      }
      if (type == 3) {
        return Number(
          (
            Number((this.calculate.Stop_Gain - this.calculate.Stop_Loss) / 4) +
            Number(this.calculate.Stop_Loss)
          ).toFixed(6)
        );
      }
    },
  },

  watch: {
    '$store.state.dark'(newValue) {
      this.isDark = newValue;
    },
  },
};
</script>
