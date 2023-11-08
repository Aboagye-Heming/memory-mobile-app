<template>
  <BaseLayout :pageTitle="loadedMemory.title" page-default-back-link="/memories">
    <ion-list>
      <h1 v-if="!loadedMemory">Could not find memory for the given id.</h1>
      <h3 v-else>Loaded it</h3>
    </ion-list>
  </BaseLayout>
</template>
<script>
import { IonList } from "@ionic/vue";
import BaseLayout from "../components/base/BaseLayout.vue";

export default {
  components: {
    IonList,
    BaseLayout,
  },
  data() {
    return {
    //   pageTitle: "Details",
      memoryId: this.$route.params.id,
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script> 
