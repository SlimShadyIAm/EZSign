<template>
	<div id="app">
		<Header
			text="EZ-Sign - Home"
			subtext="Overview of all the translation options"
		/>
		<MainMenuButtons></MainMenuButtons>
	</div>
</template>

<script>
import "bulma";
import Header from "@/components/Header";
import MainMenuButtons from "@/components/MainMenuButtons";

export default {
	name: "Home",
	components: {
		Header,
		MainMenuButtons
	}
};
</script>

<style></style>
