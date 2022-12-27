<template lang="pug">
  v-app
    //- 判斷是不是404
    template(v-if="$route.path !='/404'")
      nav-bar
      v-main.grey.lighten-3
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
import { mapState } from "vuex";
export default {
  name: "App",

  data: () => ({
    links: ["Dashboard", "Messages", "Profile", "Updates"],
  }),
  components: {
    navBar,
  },

  computed: {
    ...mapState(["sidebar"]),
  },

  created() {
    console.log(this.sidebar);
    if (this.sidebar) this.links = this.sidebar;
  },
  methods: {
    to(item) {
      console.log(item);
    },
  },
};
</script>
