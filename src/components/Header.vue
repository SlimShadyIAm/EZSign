<template>
    <section class="hero is-info is-bold">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <router-link to="/" class="navbar-item">
                            <HomeIcon />Home
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    <span class="route">{{ text }}</span>
                </h1>
                <h2 class="subtitle">{{ subtext }}</h2>
            </div>
        </div>
    </section>
</template>

<script>
import HomeIcon from "vue-material-design-icons/Home.vue";

export default {
    name: "Header",
    components: { HomeIcon },
    props: ["text", "subtext"]
};
</script>
<style>
.hero {
    margin-bottom: 20px;
}
@media (max-width: 400px) {
    .hero {
        margin-bottom: 35px;
    }
}
.route {
    font-style: italic;
    font-size: 26px;
}

.subtitle {
    font-size: 22px !important;
    font-weight: 400 !important;
}

.navbar-brand {
    font-weight: 800;
}
</style>
