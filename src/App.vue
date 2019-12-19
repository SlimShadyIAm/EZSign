<template>
	<div id="app">
		<Header></Header>
		<MainMenuButtons></MainMenuButtons>
	</div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import "bulma";
import Header from "./components/Header";
import MainMenuButtons from "./components/MainMenuButtons";
export default {
	name: "app",
	components: {
		Header,
		MainMenuButtons
	}
};
</script>

<style></style>
