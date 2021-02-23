<template>
  <div class="units">
    <unit-container></unit-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UnitContainer from '../components/UnitContainer.vue'

@Component({
  components: {
    UnitContainer,
  },
})
export default class Units extends Vue {}
</script>

<style>

</style>
