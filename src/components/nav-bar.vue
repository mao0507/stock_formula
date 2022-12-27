<template lang="pug">
    v-app-bar(app color="white" flat)
        v-avatar(:color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'" size="32")
        v-tabs.ml-n9(centered color="grey darken-1")
          v-tab(v-for="link in links"  @click="to(link.to)")  {{ link.text }}
        //-v-avatar(class="hidden-sm-and-down" color="grey darken-1 shrink" size="32")
        
        

     
</template>
<script>
export default {
  data: () => ({
    links: [
      { text: "建議開倉計算", to: "/home" },
      { text: "GitHub", to: "github" },
    ],
  }),
  methods: {
    to(item) {
      console.log(item);
      if (item == "github") {
        window.location.href = "https://github.com/mao0507";
      }
    },
  },
};
</script>
