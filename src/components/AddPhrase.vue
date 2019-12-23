<template>
	<div>
		<form @submit.prevent="addPhrase">
			<input
				type="text"
				v-model="phraseText"
				name="phraseText"
				placeholder="Phrase text here..."
			/>
			<div class="control">
				<input type="submit" value="Submit" class="button is-primary" />
			</div>
		</form></div
></template>

<script>
import uuid from "uuid";
export default {
	name: "AddPhrase",
	data() {
		return {
			phraseText: ""
		};
	},
	methods: {
		addPhrase() {
			const newPhrase = {
				id: uuid.v4(),
				phraseText: this.phraseText
			};
			// Send up to parent
			this.$emit("add-phrase", newPhrase);
			this.phraseText = "";
		}
	}
};
</script>

<style>
form {
	display: flex;
	margin-bottom: 20px;
}
input[type="text"] {
	flex: 10;
	padding: 5px;
}
input[type="submit"] {
	flex: 2;
}
</style>
