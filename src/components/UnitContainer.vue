<template>
	<div>
		<div class="container-xl my-4">
			<div class="row">
				<div class="form w-100 d-flex mb-4">
					<input class="form-control form-control-lg" type="text" v-model="searchInput" v-on:keydown="clearSort" placeholder="search for unit" id="">
					<button class="btn btn-primary btn-lg" type="submit">Search</button>
				</div>

			</div>
		</div>
		<div class="container-xl my-4 position-relative">
			<div v-if="!loaded" class="loading">
				<div class="spinner-border" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<select name="sortby" id="sortby" @change="clearSearch" v-model="sortBy">
					<option value="" selected>Sort by</option>
					<option value="name">Alphabet</option>
					<option value="hitpoints">Hitpoints</option>
					<option value="attack">Attack damage</option>
				</select>
				<Unit v-for="unit in filteredUnits" :key="unit.id" v-bind="unit">{{unit.name}}</Unit>
				<div class="bg-warning my-4 p-2" v-if="filteredUnits.length < 1 && loaded">
					<h1>No units found with name {{searchInput}}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ageOfEmpiresService } from '../../src/services/ageOfEmpiresService'
import Unit from '../../src/components/Unit.vue'
import { IUnit } from '../Interfaces'


@Component({
	components: {
		Unit
	}
})
export default class UnitContainer extends Vue {
	public loaded: boolean = false;
	public units: IUnit[] = [];
	public searchInput: string = "";
	public sortBy: string = "";

	mounted() {
		this.getUnits();
	}

	public getUnits() {
		ageOfEmpiresService.getUnits()
			.then((response: any) => {
				this.units = (response.data.units as IUnit[])
				this.loaded = true;
			})
	}

	public clearSearch(){
		this.searchInput = '';
	}
	public clearSort(){
		this.sortBy = '';
	}

	get filteredUnits() {
		if (this.searchInput) {
			return this.units.filter((unit: IUnit) => {
				return unit.name.toLowerCase().includes(this.searchInput.toLowerCase())
			})
		} if (this.sortBy === 'hitpoints')  {
			this.units.sort(function(a, b){
				if (a.hit_points > b.hit_points) { return -1 }
				if (a.hit_points < b.hit_points) { return 1 }
				return 0;
			})
		} if (this.sortBy === 'name')  {
			this.units.sort(function(a, b){
				if (a.name < b.name) { return -1 }
				if (a.name > b.name) { return 1 }
				return 0;
			})
		} if (this.sortBy === 'attack')  {
			this.units.sort(function(a, b){
				if (a.attack > b.attack) { return -1 }
				if (a.attack < b.attack) { return 1 }
				return 0;
			})
		} 
		return this.units
	}

}
</script>

<style lang="scss">
.loading {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
}
.card {
	.card-img-left {
		width: 100px;
		height: 100px;
		margin: auto;
	}
}
</style>