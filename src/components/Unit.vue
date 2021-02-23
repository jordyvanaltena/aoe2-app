<template>
	<div class="unit shadow">
		<h3 class="text-center">{{name}}</h3>
		<div class="unit-wrap">
			<img class="unit-icon" :src="require(`../assets/unit-placeholder.jpg`)" alt="">
			<div class="stat-wrap">
				<p v-if="attack" class="unit-stat"><span class="font-weight-bold"> Attack:</span> {{attack}}</p>
				<p v-if="armor" class="unit-stat"><span class="font-weight-bold"> Armor:</span> {{armor}}</p>
				<p v-if="line_of_sight" class="unit-stat"><span class="font-weight-bold"> LOS:</span> {{line_of_sight}}</p>
				<p v-if="range" class="unit-stat"><span class="font-weight-bold"> range:</span> {{range}}</p>
				<p v-if="accuracy" class="unit-stat"><span class="font-weight-bold"> accuracy:</span> {{accuracy}}</p>
			</div>
		</div>
		<div class="hitpoints mt-2">
            <div class="progress">
				<div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
			</div>
			<p>{{hit_points}} hitpoints</p>
		</div>
		<p class="font-italic">{{description}}</p>
        {{cost.Provides}}
		<ul v-if="cost.Cost != 'No cost'" class="cost list-unstyled d-f">
            <h5>cost</h5>
			<li v-for="(value, name) in cost" :key="value.name">
				{{ value }}
				{{ name }}
			</li>
		</ul>
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
	@Prop() private accuracy!: string;
	@Prop() private range!: number;
	@Prop() private attack_bonus!: string[];
}
</script>

<style lang="scss">
.unit{
    background-color: #f8f8f8;
    padding: 16px;
    border-radius: 8px;
}
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
    height: 100px;
	border: 1px solid black;
}
</style>