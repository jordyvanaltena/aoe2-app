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