<template lang="pug">
v-app
  components(:is="Layout")
    transition(name="fade" mode="out-in")
      router-view

</template>
<script>
import DefaultLayout from '../src/layout/DefalutLayout.vue';

//import navBar from "../src/components/nav-bar.vue";
import { meme } from '../src/store/meme';
export default {
  name: 'App',

  data: () => ({
    styleClass: 'grey darken-2',
  }),
  components: {
    //navBar,
    DefaultLayout,
  },
  watch: {
    '$store.state.dark'(newValue) {
      let isDark = newValue;
      if (isDark) {
        this.styleClass = 'grey darken-2';
      } else {
        this.styleClass = 'grey lighten-3';
      }
    },
  },

  computed: {
    Layout() {
      //const latout = this.$route.meta.latout || "default";
      //return latout + "Layout";
      return 'DefaultLayout';
    },
  },

  created() {
    let count = this.getRandom(1, 5);
    //如果是加密貨幣
    if (this.$route.path.includes('cryptocurrency')) {
      meme(count);
    }
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>
<style scoped>
/**
 * Transition animation between pages
 */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
