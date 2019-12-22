<template>
	<div>
		<a class="button is-info is-large">{{ phrase }}</a>
	</div>
</template>

<script>
export default {
	name: "Phrase",
	props: ["phrase"]
};
</script>

<style>
.button {
	margin-bottom: 10px;
}
</style>
