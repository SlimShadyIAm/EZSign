<template>
	<div id="app">
		<Header
			text="EZ-Sign - Home"
			:subtext="
				'Overview of all the translation options, chosen scenario: ' +
					$store.getters.phrases.name
			"
		/>
		<MainMenuButtons :phrases="chosenPhrase"></MainMenuButtons>
		<SelectScenario
			v-if="!$store.getters.phraseChosen"
			:phrases="phrases"
			v-on="(chosenPhrase = phrase)"
		></SelectScenario>
	</div>
</template>

<script>
import "bulma";
import uuid from "uuid";
import Header from "@/components/Header";
import MainMenuButtons from "@/components/MainMenuButtons";
import SelectScenario from "@/components/SelectScenario";

export default {
	name: "Home",
	components: {
		Header,
		MainMenuButtons,
		SelectScenario
	},
	data() {
		return {
			phrases: [
				{
					id: uuid.v4(),
					name: "Coffee",
					phrases: [
						"Hey! I would like to order an iced coffee, To-go.",
						"No, i do not want cream.",
						"I would like to pay by card."
					]
				},
				{
					name: "Doctor appointment",
					id: uuid.v4(),
					phrases: [
						"I have a fever and a headache.",
						"I have had these issues since yesterday.",
						"Do you know from where i can get these?",
						"Okay looks easy to find. Thank you!"
					]
				},
				{
					name: "Device repair",
					id: uuid.v4(),
					phrases: [
						"My laptop has been getting blue screens often.",
						"It has been doing it for one and a half weeks.",
						"I was watching a video on Youtube.",
						"Once every two days."
					]
				},
				{
					name: "Library",
					id: uuid.v4(),
					phrases: [
						"I would like to borrow Harry Potter, Prisoner of Azkaban.",
						"No, i do not have a membership.",
						"I want to borrow them until the twenty-third.",
						"No, i do not want a bag. I will put them in my backpack."
					]
				},
				{
					name: "Purchasing shoes",
					id: uuid.v4(),
					phrases: [
						"I am looking for light, durable, running shoes.",
						"I would prefer simple, white	and casual.",
						"They are a bit tight around the back but I like the look, could you bring one size bigger",
						"Yes these fit perfectly, I would like to purchase these."
					]
				}
			],
			chosenPhrase: []
		};
	}
};
</script>

<style></style>
