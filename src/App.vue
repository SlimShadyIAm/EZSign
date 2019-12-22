<template>
	<div id="app">
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script>
import "bulma";
import Footer from "@/components/Footer";
export default {
	name: "app",
	components: { Footer }
};
</script>

<style>
.footer {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 150px;
}
</style>
