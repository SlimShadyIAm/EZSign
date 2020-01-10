import Vue from "vue";
import Vuex from "vuex";
// import uuid from "uuid";

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		phrases: [
			{
				name: "Coffee",
				phrases: [
					"Hey! I would like to order an iced coffee, To-go.",
					"No, I do not want cream.",
					"I would like to pay by card."
				]
			},
			{
				name: "Doctor appointment",
				phrases: [
					"I have a fever and a headache.",
					"I have had these issues since yesterday.",
					"Do you know from where i can get these?",
					"Okay looks easy to find. Thank you!"
				]
			},
			{
				name: "Device repair",
				phrases: [
					"My laptop has been getting blue screens often.",
					"It has been doing it for one and a half weeks.",
					"I was watching a video on Youtube.",
					"Once every two days."
				]
			},
			{
				name: "Library",
				phrases: [
					"I would like to borrow Harry Potter, Prisoner of Azkaban.",
					"No, I do not have a membership.",
					"I want to borrow them until the twenty-third.",
					"No, I do not want a bag. I will put them in my backpack."
				]
			},
			{
				name: "Purchasing shoes",
				phrases: [
					"I am looking for light, durable, running shoes.",
					"I would prefer simple, white	and casual.",
					"They are a bit tight around the back but I like the look, could you bring one size bigger",
					"Yes these fit perfectly, I would like to purchase these."
				]
			}
		],
		phraseChosen: null
	},
	mutations: {
		setPhrase(state, phrases) {
			state.phraseChosen = phrases;
		}
	},
	getters: {
		getAllPhrases: state => state.phrases,
		getScenarioPhrase: state => state.phraseChosen
	}
});
