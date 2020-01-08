import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		phrases: ""
	},
	mutations: {
		setPhrase(state, phrases) {
			state.phrases = phrases;
		}
	},
	getters: {
		phrases: state => state.phrases
	}
});
