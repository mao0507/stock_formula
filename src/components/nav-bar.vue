<template lang="pug">
    v-app-bar(app flat :dark="isDark")
      v-app-bar-nav-icon(@click="to('github')")
        template(#default)
          v-icon(:color="textStyle") mdi-github
      v-spacer
      v-tabs.ml-n10.px-6(centered color="grey darken-1" show-arrows )
        v-tab(v-for="link in links"  @click="to(link.to)")  {{ link.text }}
      v-spacer
      v-switch.ml-n8.mt-2(inset hide-details="true" v-model="isDark")
        
        

     
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    isDark: false,
    links: [
      { text: "建議開倉計算", to: "/" },
      { text: "ROI 計算", to: "/roi" },
    ],
  }),
  computed: {
    ...mapState(["sidebar", "dark"]),
    ...mapMutations(["changeDark"]),
    textStyle() {
      if (this.isDark) {
        return "white--text";
      } else {
        return "black--text";
      }
    },
  },
  methods: {
    to(item) {
      console.log(item);
      if (item == "github") {
        window.location.href = "https://github.com/mao0507/stock_formula";
      } else {
        this.$router.push(item);
      }
    },
  },
  mounted() {
    this.isDark = this.dark;
    this.links = this.sidebar;
  },
  watch: {
    isDark(newValue) {
      this.$store.commit("changeDark", newValue);
      //console.log("dark", this.dark);
    },
  },
};
</script>
