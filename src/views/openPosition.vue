<template lang="pug">
v-col(cols="12" sm="8" md="8" lg="12")
  v-overlay(:value="overlay")
    v-progress-circular(indeterminate size="64")
  v-card(min-height="80vh" rounded="lg" :dark="isDark")
    v-card-title 
      v-icon mdi-apps-box
      span.pl-2 開倉建議 計算
    v-card-text
      v-container
        v-text-field.my-3(v-bind="textSetting" label="總資金" v-model="calculate.TA") 
        v-text-field.my-3(v-bind="textSetting" label="停損比率(百分比)" v-model="calculate.StopLoss")
        v-radio-group.my-3(v-model="calculate.type"  v-bind="radioSetting" )
          v-radio(label="做多" value=1)
          v-radio(label="做空" value=0)

        v-text-field.my-3(v-model="calculate.in" v-bind="textSetting" :label="inTitle")
        v-text-field.my-3(v-model="calculate.out" v-bind="textSetting" :label="outTitle")

        v-divider.mb-2

        h3 總資金 ：{{calculate.TA | thousandComma}}
        br
        h3 停損比率(百分比) ：{{this.calculate.StopLoss}} %
        br 
        h3 操作方向 ： {{LongShort}}
        br
        h3 {{inTitle}} ： {{calculate.in | thousandComma}}
        br
        h3 {{outTitle}} ： {{calculate.out | thousandComma}}
        br
        h3 建議開倉金額 ： {{open_U }}
        br
        h3 {{typeTitle}}： {{open_Unit}}
        br
        h3 風報比2.5停利點 : {{ hazardRatio_StopLoss }}

</template>
<script>
export default {
  data: () => ({
    isDark: null,
    overlay: true,
    calculate: {
      TA: null, //總資金
      StopLoss: 1, //停損比率
      type: '1', //操作方向
      in: null, //進場
      out: null, //停損
    },
    textSetting: {
      outlined: true,
      'hide-details': true,
      dense: true,
      type: 'number',
      min: 0,
    },
    radioSetting: {
      'hide-details': true,
      row: true,
      label: '操作方向',
    },
    typeTitle: '',
  }),
  props: { type: String },
  computed: {
    Stop_Loss() {
      return this.calculate.StopLoss / 100;
    },
    Stop_Loss_Amount() {
      return this.calculate.TA * this.Stop_Loss;
    },
    LongShort() {
      return this.calculate.type == 0 ? '做空' : '做多';
    },
    inTitle() {
      return this.calculate.type == 1 ? '做多進場價格' : '做空進場價格';
    },
    outTitle() {
      return this.calculate.type == 1 ? '做多停損價格' : '做空停損價格';
    },
    Long_Loss_Point() {
      if (this.calculate.type == 1) {
        return this.calculate.in - this.calculate.out;
      } else {
        return this.calculate.out - this.calculate.in;
      }
    },
    open_U() {
      let open = Math.round(
        (this.Stop_Loss_Amount / this.Long_Loss_Point) * this.calculate.in
      );
      return isNaN(open)
        ? 0
        : open == Infinity
        ? '進場價格 不可與 停損價格 相同'
        : open;
    },
    open_Unit() {
      let num = this.open_U / this.calculate.in;
      if (this.type == 'twStock') {
        num = (num / 1000).toFixed(3);
      }
      return isNaN(num)
        ? 0
        : num == Infinity
        ? '進場價格 不可與 停損價格 相同'
        : num;
    },
    hazardRatio_StopLoss() {
      const moneyIn = this.calculate.in;
      const moneyOut = this.calculate.out;
      let stopLoss = this.calculate.type
        ? (moneyIn - moneyOut) * 2.5 + Number(moneyIn)
        : (moneyIn - moneyOut) * 2.5 + Number(moneyIn);
      return this.roundTo(stopLoss, 6);
    },
  },
  methods: {
    thousandComma(num) {
      if (num == null || num == undefined || num == '' || isNaN(num)) {
        //console.log("缺少num參數");
        return 0;
      }
      var str = num.toString();
      var reg =
        str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
      return str.replace(reg, '$1,');
    },
    roundTo(num, decimal) {
      return +(Math.round(num + `e+${decimal}`) + `e-${decimal}`);
    },
  },
  mounted() {
    setTimeout(() => {
      this.overlay = false;
    }, 500);
    this.isDark = this.$store.state.dark;

    if (this.type == 'cryptocurrency') {
      this.typeTitle = '建議開倉顆數';
      this.$forceUpdate();
    }
    if (this.type == 'twStock') {
      this.typeTitle = '建議開倉張數';
      this.$forceUpdate();
    }
    if (this.type == 'usStock') {
      this.typeTitle = '建議開倉股數';
      this.$forceUpdate();
    }
  },
  watch: {
    '$store.state.dark'(newValue) {
      this.isDark = newValue;
    },
    //如果type 有變化
    type(newValue) {
      if (newValue == 'cryptocurrency') {
        this.typeTitle = '建議開倉顆數';
        this.$forceUpdate();
      }
      if (newValue == 'twStock') {
        this.typeTitle = '建議開倉張數';
        this.$forceUpdate();
      }
      if (newValue == 'usStock') {
        this.typeTitle = '建議開倉股數';
        this.$forceUpdate();
      }
    },
  },
};
</script>
