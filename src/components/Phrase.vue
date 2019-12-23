<template>
    <div class="columns is-mobile" :class="deleted ? 'grayscale' : ''">
        <div class="column" v-if="!editMode">
            <a class="button is-info is-large">{{ phrase }}</a>
        </div>
        <div class="column is-four-fifths" v-if="editMode">
            <a class="button is-info is-large">{{ phrase }}</a>
        </div>
        <div class="column is-one-fifth" v-if="editMode">
            <a @click="delPhrase" class="button is-danger is-large">del</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Phrase",
    props: ["phrase", "editMode"],
    data() {
        return {
            deleted: false
        };
    },
    methods: {
        delPhrase() {
            this.deleted = !this.deleted;
            this.$emit("delete", this.phrase.id);
        }
    }
};
</script>

<style>
.columns {
    margin-bottom: 10px;
}
.grayscale {
    background-color: rgb(151, 151, 151);
}
</style>
