<template lang="pug">
    v-app-bar(app flat :dark="isDark")
      v-avatar(size="32" color="grey darken-1 shrink" @click="to('github')" style="z-index:99")
        v-btn.grey.darken-1(@click="to('github')")
          v-icon.white--text mdi-github
      v-tabs.ml-n9(centered color="grey darken-1")
        v-tab(v-for="link in links"  @click="to(link.to)")  {{ link.text }}
        //- v-avatar(class="hidden-sm-and-down" color="grey darken-1 shrink" size="32")
        //-   v-btn.grey.darken-1()
        //-     v-icon.white--text mdi-github
      v-switch.mt-2(inset hide-details="true" v-model="isDark")
        
        

     
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
    ...mapState(["dark"]),
    ...mapMutations(["changeDark"]),
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
  },
  watch: {
    isDark(newValue) {
      this.$store.commit("changeDark", newValue);
      //console.log("dark", this.dark);
    },
  },
};
</script>
