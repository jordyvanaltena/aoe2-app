<template>
	<b-navbar id="nav" toggleable="lg" type="dark" variant="primary">
		<div class="container-xl">
			<b-navbar-brand href="#">AOE2 CIVS</b-navbar-brand>
			<b-button v-b-toggle.sidebar-1><span class="navbar-toggler-icon"></span></b-button>
		</div>
	</b-navbar>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>
