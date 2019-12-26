<template>
    <div class="modal" :class="modalActive ? 'is-active' : ''">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Transcribed text</p>
                <button @click="closeModal" class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">{{text}}</section>
        </div>
    </div>
</template>

<script>
export default {
    name: "Transcribed",
    props: ["text", "modalActive"],
    methods: {
        closeModal() {
            this.modalActive = !this.modalActive;
            this.$emit("close", this.modalActive);
        }
    }
};
</script>

<style>
.modal-card {
    height: 100%;
}
.modal-card-head,
.modal-card-body {
    border-bottom: none;
    border-bottom-color: #fff;
}

.delete {
    min-width: 40px !important;
    max-width: 40px !important;
    min-height: 40px !important;
    max-height: 40px !important;
    margin-bottom: 20px;
}

.modal-card-head {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
}

.modal-card-body {
    font-size: 48px;
    font-weight: 600;
}
</style>