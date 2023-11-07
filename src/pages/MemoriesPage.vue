<template>
  <BaseLayout :pageTitle="pageTitle">
    <ion-list>
      <ion-item router-link="/memories/1">A trip into the mountains </ion-item>
      <ion-item>Surfing the sea side </ion-item>
      <ion-item>Good eating </ion-item>
    </ion-list>
  </BaseLayout>
</template>

<script>
import { IonList, IonItem } from "@ionic/vue";
import BaseLayout from "../components/base/BaseLayout.vue";

export default {
  components: {
    IonList,
    IonItem,BaseLayout,
  },
  data() {
    return {
      pageTitle: "All Memories",
    };
  },
};
</script>
