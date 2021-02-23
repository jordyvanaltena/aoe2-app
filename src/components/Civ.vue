<template>
	<div class="civ shadow">
		<h3 class="text-center">{{name}}</h3>
		<div class="civ-wrap">
			<img class="civ-icon" :src="require(`../assets/civs/${name.toLowerCase()}.png`)" alt="">
			<div class="stat-wrap">
				<p v-if="army_type" class="civ-stat"><span class="font-weight-bold">Army type:</span> {{army_type}}</p>
				<p v-if="expansion" class="civ-stat"><span class="font-weight-bold">Expansion: </span> {{expansion}}</p>
				<p v-if="team_bonus" class="civ-stat"><span class="font-weight-bold">Teambonus: </span> {{team_bonus}}</p>
			</div>
		</div>
		<ul class="list-unstyled" v-if="unique_unit.length > 0">
			<span class="font-weight-bold">unique unit</span>
			<li class="word-break" v-for="(value) in unique_unit" :key="value.name">
				{{ value }}
			</li>
		</ul>
		<ul class="list-unstyled" v-if="unique_tech.length > 0">
			<span class="font-weight-bold">unique tech</span>
			<li class="word-break" v-for="(value) in unique_tech" :key="value.name">
				{{ value }}
			</li>
		</ul>
		<ul class="list-unstyled" v-if="civilization_bonus.length > 0">
			<span class="font-weight-bold">Civilization bonus</span>
			<li v-for="(value) in civilization_bonus" :key="value.name">
				{{ value }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
	components: {
	}
})
export default class Civ extends Vue {
	@Prop() private name!: string;
	@Prop() private army_type!: string;
	@Prop() private expansion!: string;
	@Prop() private unique_unit!: string[];
	@Prop() private unique_tech!: string[];
	@Prop() private team_bonus!: string;
	@Prop() private civilization_bonus!: string[];
}
</script>

<style lang="scss">
.civ {
	background-color: #f8f8f8;
	padding: 16px;
	border-radius: 8px;
}
.civ-wrap {
	display: flex;
	.stat-wrap {
		margin-left: 1rem;
		.civ-stat {
			margin-bottom: 0;
		}
	}
}
.list-unstyled{
	.word-break{
		word-break: break-all;
	}
}
.civ-icon {
	width: 100px;
	height: 100px;
}
</style>