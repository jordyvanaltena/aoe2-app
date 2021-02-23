<template>
  <div id="home">
    <civ-container/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CivContainer from '../components/CivContainer.vue'
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

@Component({
  components: {
    CivContainer,
    Header,
    Footer
  },
})
export default class Home extends Vue {}
</script>

<style>

</style>
