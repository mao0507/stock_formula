<template lang="pug">
  v-list(nav dense)
    template(v-for="item in list")
      template(v-if="item.category != null")
        v-list-group
          template(#activator)
            v-list-item-icon 
              v-icon {{item.icon}}
            v-list-item-content
              v-list-item-title {{item.name}}
      
          template(v-for="cItem in item.category")
            v-list-item(:to="cItem.to")
              v-list-item-icon 
                v-icon mdi-circle-medium
              v-list-item-content
                v-list-item-title {{cItem.name}}

      template(v-else)
        v-list-item(:to="item.to")
          v-list-item-icon 
            v-icon {{item.icon || 'mdi-circle-medium'}}
          v-list-item-content
            v-list-item-title {{item.name}}
</template>
<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    list: [
      {
        name: '股票',
        icon: 'mdi-chart-waterfall',
        category: [
          { name: '', to: '', icon: '' },
          { name: '', to: '', icon: '' },
        ],
      },
      {
        name: '加密貨幣',
        icon: 'mdi-bitcoin',
        category: [
          { name: '', to: '', icon: '' },
          { name: '', to: '', icon: '' },
        ],
      },
    ],
  }),
  props: {},
  components: {},
  computed: {
    ...mapState(['sidebar']),
  },
  created() {
    this.list = this.sidebar;
  },
  mounted() {},
  methods: {},
};
</script>
<style></style>
