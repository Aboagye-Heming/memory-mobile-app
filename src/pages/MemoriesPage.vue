<template>
  <BaseLayout :pageTitle="pageTitle">
    <ion-list>
      <ion-item
        v-for="memory in memories"
        :router-link="`/memories/${memory.id}`"
        :key="memory.id"
      >
      <ion-img :src="memories.img"></ion-img>
        {{ memory.title }}
        {{ memory.img }}
      </ion-item>
    </ion-list>
  </BaseLayout>
</template>

<script>
import { IonList, IonItem,IonImg } from "@ionic/vue";
import BaseLayout from "../components/base/BaseLayout.vue";

export default {
  components: {
    IonList,
    IonItem,
    BaseLayout,
  },
  data() {
    return {
      pageTitle: "All Memories",
     
    };
  },
  computed: {
    memories(){
      return this.$store.getters.memories;
    }
  }
};
</script>
