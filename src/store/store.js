import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		phrases: "",
		phraseChosen: ""
	},
	mutations: {
		setPhrase(state, phrases) {
			state.phrases = phrases;
		},
		phraseChosen(state) {
			state.phraseChosen = true;
		}
	},
	getters: {
		phrases: state => state.phrases,
		phraseChosen: state => state.phraseChosen
	}
});
