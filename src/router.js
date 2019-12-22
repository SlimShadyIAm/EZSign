import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import VueRouterBackButton from "vue-router-back-button";

Vue.use(Router);

const router = new Router({
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

Vue.use(VueRouterBackButton, { router });

export default router;
