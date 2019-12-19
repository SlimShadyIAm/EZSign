import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/transcribe",
			name: "transcribe",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/Transcribe.vue")
		},
		{
			path: "/phrases",
			name: "phrases",
			component: () =>
				import(/* webpackChunkName: "about" */ "./views/Phrases.vue")
		}
	]
});
