<template>
	<div class="content">
		<Header
			text="Quick responses"
			subtext="This is a list of your saved quick responses. Because sometimes it's easier to just tap on what you want, rather than sign the same thing out over and over."
		></Header>
		<Phrases></Phrases>
	</div>
</template>

<script>
import Phrases from "@/components/Phrases";
import Header from "@/components/Header";

export default {
	name: "PhrasesView",
	components: {
		Phrases,
		Header
	}
};
</script>

<style>
.flex-container {
	margin: 0 20px;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
}
.flex-container > *:last-child {
	align-self: flex-end;
}
</style>
