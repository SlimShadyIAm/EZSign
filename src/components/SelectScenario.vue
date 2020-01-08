<template>
	<div class="modal" :class="modalActive ? 'is-active' : ''">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Select a Scenario</p>
			</header>
			<section class="modal-card-body">
				<div class="columns">
					<div
						class="column is-6"
						v-for="phrase in phrases"
						:key="phrase.id"
					>
						<a
							@click="choosePhrase(phrase.phrases)"
							class="button"
							>{{ phrase.name }}</a
						>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: "SelectScenario",
	props: ["phrases"],
	data() {
		return {
			modalActive: true
		};
	},
	methods: {
		closeModal() {
			this.modalActive = !this.modalActive;
			this.$emit("close", this.modalActive);
		},
		choosePhrase(phrase) {
			this.$store.commit("setPhrase", phrase);
			this.$store.commit("phraseChosen");
			this.closeModal();
		}
	}
};
</script>

<style></style>
