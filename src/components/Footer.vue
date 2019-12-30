<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <div class="columns is-mobile">
                <div class="column is-half is-offset-one-quarter">
                    <router-link
                        class="button is-danger"
                        v-if="$routerHistory.hasPrevious()"
                        :to="{ path: $routerHistory.previous().path }"
                    >
                        <UndoIcon></UndoIcon>Back
                    </router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import UndoIcon from "vue-material-design-icons/Undo.vue";

import "vue-material-design-icons/styles.css";
export default {
    name: "Footer",
    components: {
        UndoIcon
    }
};
</script>

<style>
.button {
    width: 100%;
}
span {
    margin-right: 8px;
    margin-bottom: 8px;
    font-size: 20px;
}
</style>
