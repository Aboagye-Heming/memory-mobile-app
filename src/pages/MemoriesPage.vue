<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>All memories</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>Kwabena </ion-item>
        <ion-item>Aboagye </ion-item>
        <ion-item>Heming </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonList,
    IonItem,
  },
};
</script>
