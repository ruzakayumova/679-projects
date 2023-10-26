<template>
  <new-component />
  <the-banner />
  <cards-component />
  <my-component />
</template>

<script>
import NewComponent from './components/NewComponent.vue';
import TheBanner from "./components/TheBanner.vue";
import CardsComponent from "./components/CardsComponent.vue";

export default {
  name: "App",
  components: {
    TheBanner,
    NewComponent,
    CardsComponent
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
