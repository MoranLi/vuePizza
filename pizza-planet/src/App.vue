<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    <div class="container">
      <pp-admin></pp-admin>
    </div>
    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import home from './components/home.vue'
import menu from './components/menu.vue'
import admin from './components/admin.vue'
export default {
  components: {
    ppHeader : header,
    ppFooter : footer,
    ppHome : home,
    ppMenu : menu,
    ppAdmin : admin
  }
}
</script>

<style>

</style>
