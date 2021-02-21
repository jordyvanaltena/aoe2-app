<template>
	<div class="position-relative">
		<div class="container-xl py-4">
			<div class="row">
				<div class="form w-100 d-flex mb-4">
					<input class="form-control form-control-lg" type="text" v-model="searchInput" placeholder="search for civ" id="">
					<button class="btn btn-primary btn-lg" type="submit">Search</button>
				</div>
			</div>
			<div v-if="!loadedCivs" class="loading">
				<div class="spinner-border" role="status">
					<span class="sr-only">Loading...</span>
				</div>
			</div>
			<div class="row" v-if="filteredCivs">
				<ul>
					<li v-for="civ in filteredCivs" :key="civ.id">{{civ.name}} <button>Go to civ</button></li>
				</ul>
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