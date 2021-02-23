<template>
	<div class="card col-12">

		<h5>{{name}}</h5>
		<div class="unit-wrap">
			<img class="unit-icon" :src="require(`../assets/logo.png`)" alt="">
			<div class="stat-wrap">
				<p v-if="attack" class="unit-stat">Attack: {{attack}}</p>
				<p v-if="armor" class="unit-stat">Armor: {{armor}}</p>
				<p v-if="line_of_sight" class="unit-stat">LOS: {{line_of_sight}}</p>
			</div>
		</div>
		<div class="hitpoints mt-2">
			<div class="progress">
				<div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
			<p>{{hit_points}} hitpoints</p>
		</div>
		<p class="small">{{description}}</p>
        {{cost.Provides}}
		<div v-if="cost.Cost != 'No cost'" class="cost">
            <h5>cost</h5>
			<li v-for="(value, name) in cost" :key="value.name">
				{{ value }}
				{{ name }}
			</li>
		</div>
        <div v-if="attack_bonus">
            <h6>Attack Bonus vs</h6>
            <p v-for="bonus in attack_bonus" :key="bonus.id">{{bonus}}</p>
        </div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
	components: {
	}
})
export default class Unit extends Vue {
	@Prop() private name!: string;
	@Prop() private description!: string;
	@Prop() private expansion!: string;
	@Prop() private age!: string;
	@Prop() private created_in!: string;
	@Prop() private cost!: any;
	@Prop() private build_time!: number;
	@Prop() private reload_time!: number;
	@Prop() private movement_rate!: number;
	@Prop() private line_of_sight!: number;
	@Prop() private hit_points!: number;
	@Prop() private attack!: number;
	@Prop() private armor!: string;
	@Prop() private attack_bonus!: string[];
}
</script>

<style lang="scss">
.unit-wrap {
	display: flex;
	.stat-wrap {
		margin-left: 1rem;
		.unit-stat {
			margin-bottom: 0;
		}
	}
}
.unit-icon {
	width: 100px;
	border: 1px solid black;
}
</style>