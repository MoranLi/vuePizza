<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
      <!-- <pp-home></pp-home> -->
      <pp-menu></pp-menu>
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import home from './components/home.vue'
import menu from './components/menu.vue'
export default {
  components: {
    ppHeader : header,
    ppFooter : footer,
    ppHome : home,
    ppMenu : menu
  }
}
</script>

<style>

</style>
