<template>
	<div>
		<div class="container-xl my-4">
			<div class="row">
				<div class="form col-md-8 d-flex mb-4">
					<input class="form-control form-control-lg" type="text" v-model="searchInput" v-on:keydown="clearSort" placeholder="search for unit" id="">
					<button class="btn btn-primary btn-lg" type="submit">Search</button>
				</div>
				<div class="form col-md-4">
					<select class="form-control form-control-lg" name="sortby" id="sortby" @change="clearSearch" v-model="sortBy">
						<option value="" selected>Sort by</option>
						<option value="name">Alphabet</option>
					</select>
				</div>
			</div>
		</div>
		<div class="container-xl my-4 position-relative">
			<div v-if="!loadedCivs" class="loading">
				<div class="spinner-border" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			</div>
		</div>
		<div class="container-xl">
			<div class="row" v-if="filteredCivs">
				<div class="civ-grid w-100">
					<Civ v-for="civ in filteredCivs" :key="civ.id" v-bind="civ">{{civ.name}}</Civ>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ageOfEmpiresService } from '../../src/services/ageOfEmpiresService'
import Civ from '../../src/components/Civ.vue'
import { ICiv } from '../Interfaces'


@Component({
	components: {
		Civ
	}
})
export default class CivContainer extends Vue {
	public loadedCivs: boolean = false;
	public civs: ICiv[] = [];
	public searchInput: string = "";
	public sortBy: string = "";

	mounted() {
		this.getCivs();
	}

	public clearSearch() {
		this.searchInput = '';
	}
	public clearSort() {
		this.sortBy = '';
	}


	public getCivs() {
		ageOfEmpiresService.getCivs()
			.then((response: any) => {
				this.civs = (response.data.civilizations as ICiv[]);
				this.loadedCivs = true;
			})
			.catch((err) => console.log(err))
	}

	get filteredCivs(): ICiv[] {
		if (this.sortBy === 'name') {
			this.civs.sort(function (a, b) {
				if (a.name < b.name) { return -1 }
				if (a.name > b.name) { return 1 }
				return 0;
			})
		} else {
			return this.civs.filter((civ: ICiv) => {
				return civ.name.toLowerCase().includes(this.searchInput.toLowerCase())
			})
		}
		return this.civs;
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
.civ-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	grid-template-rows: auto;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
}

@media(max-width: 800px){
	.civ-grid{
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}
@media(max-width: 500px){
	.civ-grid{
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
}
</style>