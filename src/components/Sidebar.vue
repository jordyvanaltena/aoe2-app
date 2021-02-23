<template>
	<b-sidebar backdrop-variant="dark" bg-variant="white" shadow backdrop id="sidebar-1" title="Navigation">
		<div class="px-3 py-2">
			<router-link class="router-link" to="/">Civilizations</router-link>
			<router-link class="router-link" to="/units">Units</router-link>
		</div>
	</b-sidebar>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {

}
</script>
