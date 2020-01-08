<template>
	<div class="modal" :class="modalActive ? 'is-active' : ''">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Select a scenario for the test</p>
			</header>
			<section class="modal-card-body">
				<div class="columns is-mobile is-multiline">
					<div
						class="column is-6"
						v-for="phrase in phrases"
						:key="phrase.name"
					>
						<a @click="choosePhrase(phrase)" class="button">
							{{ phrase.name }}
						</a>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: "SelectScenario",
	data() {
		return {
			modalActive: true
		};
	},
	beforeMount: function() {
		this.phrases = this.$store.getters.getAllPhrases;
	},
	methods: {
		closeModal() {
			this.modalActive = !this.modalActive;
			this.$emit("close", this.modalActive);
		},
		choosePhrase(phrase) {
			this.$store.commit("setPhrase", phrase);
			this.closeModal();
		}
	}
};
</script>

<style></style>
