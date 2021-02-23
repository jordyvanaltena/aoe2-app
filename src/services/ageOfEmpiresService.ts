import http from './http';

export default class AgeOfEmpiresService {
	getCivs() {
		return http.get(`civilizations`);
	}
	getUnits() {
		return http.get('units')
	}
}

// A singleton instance
export const ageOfEmpiresService = new AgeOfEmpiresService();
