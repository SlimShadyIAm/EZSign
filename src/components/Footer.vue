<template>
	<footer v-if="$route.name != 'home'" class="footer">
		<div class="content has-text-centered">
			<div class="columns is-mobile">
				<div class="column is-half">
					<router-link
						class="button is-info"
						v-if="$routerHistory.hasPrevious()"
						:to="{ path: $routerHistory.previous().path }"
						>Back</router-link
					>
				</div>
				<div class="column is-half">
					<router-link to="/" class="button is-info"
						>Home</router-link
					>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer"
};
</script>

<style>
.button {
	width: 100%;
}
</style>
