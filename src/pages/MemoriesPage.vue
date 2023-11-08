<template>
  <base-layout :page-title="pageTitle">
    <memories-list :memories="memories"></memories-list>
  </base-layout>
</template>

<script>
import BaseLayout from "../components/base/BaseLayout.vue";
import MemoriesList from "../components/memories/MemoriesList.vue";

export default {
  components: {
    BaseLayout,
    MemoriesList,
  },
  data() {
    return {
      pageTitle: "All Memories",
    };
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>
