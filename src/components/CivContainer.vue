<template>
	<div>
		<div class="container-xl my-4">
			<div class="row">
				<div class="form w-100 d-flex mb-4">
					<input class="form-control form-control-lg" type="text" v-model="searchInput" placeholder="search for civ" id="">
					<button class="btn btn-primary btn-lg" type="submit">Search</button>
				</div>

			</div>
		</div>
		<div class="container-xl my-4 position-relative">
			<div v-if="!loadedCivs" class="loading">
				<div class="spinner-border" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			</div>
			<div class="row" v-if="filteredCivs">
		
					<div class="card col-md-4 mb-4 p-4 bg-light" v-for="civ in filteredCivs" :key="civ.id">
						<img class="img-fluid mw-100 w-50 p-4" :src="require(`../assets/civs/${civ.name.toLowerCase()}.png`)" alt="">
						<h2>{{civ.name}}</h2>
						<h6>Army type</h6>
						<p>{{civ.army_type}}</p>
						<h6>Civilization bonus</h6>
						<ul>
							<li v-for="civBonus in civ.civilization_bonus" :key="civBonus.id">{{civBonus}}</li>
						</ul>
						<h6>Team bonus</h6>
						<ul>
							<li>{{civ.team_bonus}}</li>
						</ul>
						<h6>Unique unit</h6>
						<ul>
							<li>{{civ.unique_unit}}</li>
						</ul>
						<h6>Unique tech</h6>
						<ul>
							<li>{{civ.unique_tech}}</li>
						</ul>
					</div>
			
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
    //   {
	//	 "id": 1,
    //   "name": "Aztecs",
    //   "expansion": "The Conquerors",
    //   "army_type": "Infantry and Monk",
    //   "unique_unit": [
    //     "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior"
    //   ],
    //   "unique_tech": [
    //     "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars"
    //   ],
    //   "team_bonus": "Relics generate +33% gold",
    //   "civilization_bonus": [
    //     "Villagers carry +5",
    //     "Military units created 15% faster",
    //     "+5 Monk hit points for each Monastery technology",
    //     "Loom free"
    //   ]
	//   }
	public civs: object[] = [];
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
	background-color: rgba(0, 0, 0, 0.3);
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