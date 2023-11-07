<template>
  <BaseLayout :pageTitle="pageTitle" :pageDefaultBackLink="/memories">
    <ion-list>
      <h1>The Details Page</h1>
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
      pageTitle: "Details",
    };
  },
};
</script>
