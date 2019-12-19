<template>
	<div class="columns buttons">
		<div class="column">
			<router-link to="/transcribe" class="button is-info"
				>Transcribe Sign Language</router-link
			>
			<router-link to="/phrases" class="button is-info"
				>Frequent responses</router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: "MainMenuButtons"
};
</script>

<style>
.buttons {
	padding: 20px;
}

a.button {
	width: 100%;
	padding: 25px;
	font-size: 18px;
	margin-bottom: 25px;
	font-weight: 800;
}
</style>
