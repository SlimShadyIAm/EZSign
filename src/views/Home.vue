<template>
	<div id="app">
		<Header
			text="EZ-Sign - Home"
			subtext="Overview of all the translation options"
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
					phrases: ["Hey", "Yeah", "Lol"]
				},
				{
					name: "Airport",
					id: uuid.v4(),
					phrases: ["AJLFSD", "FJLSFJD", "DSFJLSDFJ"]
				}
			],
			chosenPhrase: []
		};
	}
};
</script>

<style></style>
