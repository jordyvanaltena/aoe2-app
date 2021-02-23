<template>
  <div id="home">
    <civ-container/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CivContainer from '../components/CivContainer.vue'

@Component({
  components: {
    CivContainer,
  },
})
export default class Home extends Vue {}
</script>

<style>

</style>
