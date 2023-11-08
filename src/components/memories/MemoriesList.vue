<template>
  <ion-list>
    <MemoryListItem
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    ></MemoryListItem>
  </ion-list>
</template>
<script>
import { IonList } from "@ionic/vue";
import MemoryListItem from "./MemoryListItem.vue";

export default {
  props: ["memory"],
  components: {
    IonList,
    MemoryListItem,
  },
};
</script>
