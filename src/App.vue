<template>
	<div id="app">
    <Header></Header>
    <Sidebar></Sidebar>
		<router-view />
		<Footer />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../src/components/Header.vue'
import Sidebar from '../src/components/Sidebar.vue'
import Footer from '../src/components/Footer.vue'

@Component({
  components: {
    Header,
    Sidebar,
    Footer
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
  .router-link{
    display: block;
  }
</style>
