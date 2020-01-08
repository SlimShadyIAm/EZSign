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
html,
body {
    height: 100%;
}

#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.content {
    flex: 1 0 auto;
    /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
}
.footer {
    flex-shrink: 0;
    /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
    padding: 20px;
}
</style>
