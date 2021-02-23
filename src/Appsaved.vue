<template>
  <div id="app">
    <Header/>
    <civ-container/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CivContainer from './components/CivContainer.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

@Component({
  components: {
    CivContainer,
    Header,
    Footer
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
