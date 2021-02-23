export interface ICiv {
	id: number;
	name: string;
	expansion: string;
	army_type: string;
	unique_unit: string[];
	unique_tech: string[];
	team_bonus: string;
	civilization_bonus: string[];
}

export interface IUnit {
	id: number;
	name: string;
	description: string;
	expansion: string;
	age: string;
	created_in: string;
	cost: {
		Food: number;
		Gold: number;
	};
	build_time: number;
	reload_time: number;
	movement_rate: number;
	line_of_sight: number;
	hit_points: number;
	attack: number;
	armor: string;
	attack_bonus: string[];
}

export interface IStructure {
	id: number;
	name: string;
	expansion: string;
	age: string;
	cost: {
		Wood: number;
	};
	build_time: number;
	hit_points: number;
	line_of_sight: number;
	armor: string;
	special: string[];
}

export interface ITechnology {
	id: number;
	name: string;
	expansion: string;
	age: string;
	develops_in: string;
	cost: {
		Food: number;
		Wood: number;
	};
	build_time: number;
	applies_to: string[];
	description: string;
}
