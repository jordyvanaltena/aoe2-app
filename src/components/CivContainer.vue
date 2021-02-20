<template>
	<div class="position-relative">
		<div class="container-xl py-4">
			<div class="row">
				<div class="form w-100 d-flex mb-4">
					<b-form-input size="lg" class="mr-4" v-model="searchInput" placeholder="Search for civilizations"></b-form-input>
					<b-button size="lg" variant="primary" type="submit">Search</b-button>
				</div>
			</div>
			<div v-if="!loadedCivs" class="loading">
				<b-spinner variant="primary" label="Spinning"></b-spinner>
			</div>
			<div class="row" v-if="filteredCivs">
				<b-card v-for="civ in filteredCivs" :key="civ.id" :title="civ.name" :img-src="require(`../assets/civs/${civ.name.toLowerCase()}.png`)" :img-alt="civ.name" img-left tag="div" class="col-md-6">
					<b-card-text>
						<h6>Army type</h6>
						<p>{{civ.army_type}}</p>
						<h6>Team Bonus</h6>
						<p>{{civ.team_bonus}}</p>
						<h6>Civilization Bonus</h6>
						<ul>
							<li v-for="bonus in civ.civilization_bonus" :key="bonus.bonus">{{bonus}}</li>
						</ul>
					</b-card-text>
					<!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
				</b-card>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ageOfEmpiresService } from '../../src/services/ageOfEmpiresService'

@Component({
	components: {
	}
})
export default class CivContainer extends Vue {

	mounted() {
		this.getCivs();
	}
	public loadedCivs = false;
	public civs = [];
	public getCivs() {
		ageOfEmpiresService.getCivs()
			.then((response: any) => {
				this.civs = response.data.civilizations;
				this.loadedCivs = true;
			})
			.catch((err) => console.log(err))
	}

	public searchInput: string = "";
	get filteredCivs() {
		return this.civs.filter(civ => {
			return civ.name.toLowerCase().includes(this.searchInput.toLowerCase())
		})
	}
}
</script>

<style lang="css">
.loading {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
}
.card .card-img-left {
	width: 100px;
	height: 100px;
	margin: auto;
}
</style>