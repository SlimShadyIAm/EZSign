<template>
    <div class="columns is-mobile" :class="deleted && editMode ? 'grayscale' : ''">
        <div class="column" v-if="!editMode">
            <a class="button is-info is-large" @click="modalActive = !modalActive">{{ phrase }}</a>
        </div>
        <div class="column is-four-fifths" v-if="editMode">
            <a class="button is-info is-large">{{ phrase }}</a>
        </div>
        <div class="column is-one-fifth" v-if="editMode">
            <a @click="delPhrase" class="button is-danger is-large">
                <TrashIcon />
            </a>
        </div>
        <Transcribed
            :text="phrase"
            :modalActive="modalActive"
            v-on:close="modalActive = !modalActive"
        ></Transcribed>
    </div>
</template>

<script>
import TrashIcon from "vue-material-design-icons/Delete.vue";
import Transcribed from "@/components/Transcribed";
export default {
    name: "Phrase",
    props: ["phrase", "editMode"],
    components: {
        TrashIcon,
        Transcribed
    },
    data() {
        return {
            deleted: false,
            modalActive: false
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

span {
    display: block;
    margin-left: 0;
    font-size: 24px;
}
</style>
