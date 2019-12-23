<template>
	<div>
		<div class="phrase-container">
			<Phrase
				v-for="phrase in phrases"
				:key="phrase.id"
				:phrase="phrase.phraseText"
				:editMode="editMode"
				v-on:delete="toDelete(phrase.id)"
			/>
			<AddPhrase v-on:add-phrase="addPhrase" v-if="editMode"></AddPhrase>
			<a
				v-if="!editMode"
				@click="editMode = !editMode"
				class="button is-danger"
				>Edit</a
			>
			<div class="columns is-mobile" v-if="editMode">
				<div class="column is-half">
					<a @click="editMode = !editMode" class="button is-danger"
						>Cancel</a
					>
				</div>
				<div class="column is-half">
					<a @click="save" class="button is-primary">Save</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import uuid from "uuid";
import Phrase from "@/components/Phrase";
import AddPhrase from "@/components/AddPhrase";
export default {
	name: "Phrases",
	components: {
		Phrase,
		AddPhrase
	},
	data() {
		return {
			phrases: [
				{ id: uuid.v4(), phraseText: "Thank you!" },
				{ id: uuid.v4(), phraseText: "Uh oh stinky" }
			],
			delete: [],
			editMode: false
		};
	},
	methods: {
		toDelete(id) {
			// console.log(this.delete);
			// console.log(id);
			var found = false;
			for (var i = 0; i < this.delete.length; i++) {
				// console.log(this.delete[i]);
				if (this.delete[i] == id) {
					console.log("FOUND");

					found = true;
				}
			}
			if (found) {
				console.log("Cancelled delete");
				this.delete.splice(i, 1);
			} else {
				this.delete.push(id);
				console.log("Deleting", id);
			}
		},
		save() {
			this.delete.map(deleteItem => {
				this.phrases = this.phrases.filter(
					phrase => phrase.id != deleteItem
				);
			});
			this.editMode = !this.editMode;
		},
		addPhrase(newPhrase) {
			this.phrases = [...this.phrases, newPhrase];
		}
	}
};
</script>

<style>
.phrase-container {
	padding: 0 20px;
}
</style>
