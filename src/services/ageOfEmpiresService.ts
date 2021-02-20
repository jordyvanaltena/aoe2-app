import http from './http';

export default class AgeOfEmpiresService {
	getCivs() {
		return http.get(`civilizations`);
	}
}

// A singleton instance
export const ageOfEmpiresService = new AgeOfEmpiresService();
