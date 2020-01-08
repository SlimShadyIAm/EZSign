<template>
	<div id="app">
		<Header
			text="EZ-Sign - Home"
			:subtext="
				$store.getters.getScenarioPhrase
					? 'Overview of all the translation options, chosen scenario: ' +
					$store.getters.getScenarioPhrase.name
					: 'Overview of all the translation options'
			"
		/>
		<MainMenuButtons :phrases="chosenPhrase"></MainMenuButtons>
		<SelectScenario
			v-if="!$store.getters.getScenarioPhrase"
		></SelectScenario>
	</div>
</template>

<script>
import "bulma";
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
			chosenPhrase: []
		};
	}
};
</script>

<style></style>
