<template>
  <the-banner />
  <cards-component />
  <my-component />
</template>

<script>
import TheBanner from "./components/TheBanner.vue";
import CardsComponent from "./components/CardsComponent.vue";

export default {
  components: { CardsComponent },
  name: "App",
  components: {
    TheBanner,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
