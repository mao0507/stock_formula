<template lang="pug">
  v-app
    //- 判斷是不是404
    template(v-if="$route.path !='/404'")
      nav-bar
      v-main(:class="styleClass")
        v-container
          v-row
            v-col(cols="2" )
                    
            //- router
            router-view
    //- 如果是404 切換到404 頁面
    template(v-if="$route.path == '/404'")
      router-view

</template>
<script>
import navBar from "../src/components/nav-bar.vue";
export default {
  name: "App",

  data: () => ({
    styleClass: "grey darken-2",
  }),
  components: {
    navBar,
  },
  watch: {
    "$store.state.dark"(newValue) {
      let isDark = newValue;
      if (isDark) {
        this.styleClass = "grey darken-2";
      } else {
        this.styleClass = "grey lighten-3";
      }
    },
  },

  computed: {},

  created() {
    console.log("test");
  },
  methods: {
    to(item) {
      console.log(item);
    },
  },
};
</script>
