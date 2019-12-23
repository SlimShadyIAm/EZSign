<template>
    <div class="columns buttons">
        <div class="column">
            <router-link to="/transcribe">
                <article class="message is-info">
                    <div class="message-header">
                        <p>Translate Sign Language</p>
                    </div>
                    <div class="message-body">
                        Using the camera app, you can record some sign language
                        and the app will Automagically translate it to written
                        text!
                    </div>
                </article>
            </router-link>
            <br />
            <router-link to="/phrases">
                <article class="message is-info">
                    <div class="message-header">
                        <p>Quick Responses</p>
                    </div>
                    <div class="message-body">
                        You can save a list of responses and tap them to quickly
                        display them. Easier for something you say frequently.
                    </div>
                </article>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainMenuButtons"
};
</script>

<style>
.buttons {
    padding: 20px;
}

.message-header {
    font-size: 20px;
}
</style>
