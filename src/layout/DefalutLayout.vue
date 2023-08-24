<template lang="pug">
v-app
  .d-flex.flex-grow-1
    //- Navigation
    v-navigation-drawer.elevation-1(v-model="showSideBar" 
    app floating :right="$vuetify.rtl" :dark="mode")
      template(#prepend)
        .pa-2
          .d-flex.justify-center() 
            v-icon(large @click="go()") mdi-github
          .overline.grey--text {{version}}
      v-divider
      //- Menu
      menu-list 

    //- ToolBar
    v-app-bar(app flat :class="styleClass" :dark="mode")
      v-card.flex-grow-1.f-flex.pa-0.ma-0(flat :dark="mode")
        .d-flex.flex-grow-1.align-center()
          v-app-bar-nav-icon(@click.stop="showSideBar = !showSideBar")
          v-spacer
          v-switch.ma-2(inset hide-details="true" v-model="mode" :dark="mode")
      
    //- Main
    v-main()
      v-container.pa-0.ma-0.fill-height(:fluid="true" :class="backgroudColor")
        v-layout
            slot
        
    
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import menuList from '/src/components/menuList';
export default {
  data: () => ({
    showSideBar: null,
    mode: null,
  }),
  props: {},
  components: {
    menuList,
  },
  computed: {
    ...mapState(['dark']),
    ...mapMutations(['changeDark']),
    version() {
      // eslint-disable-next-line no-undef
      return GIT_DESCRIBE.hash || '<version here>';
    },
    styleClass() {
      return this.dark ? 'dark' : 'light';
    },
    backgroudColor() {
      return this.mode ? 'b-dark' : 'b-light';
    },
  },
  created() {
    this.mode = this.dark;
  },
  mounted() {},
  methods: {
    go() {
      window.location.href = 'https://github.com/mao0507/stock_formula';
    },
  },
  watch: {
    mode(newValue) {
      this.$store.commit('changeDark', newValue);
      //console.log("dark", this.dark);
    },
  },
};
</script>
<style>
.light {
  background-color: #ffffff !important;
}
.dark {
  background-color: #1e1e1e !important;
}
.b-dark {
  background-color: #616161 !important;
}
.b-light {
  background-color: #e1e1e1 !important;
}
</style>
