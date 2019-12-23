<template>
  <div>
    <div class="phrase-container">
      <Phrase
        v-for="phrase in phrasesData"
        :key="phrase.id"
        :phrase="phrase.phraseText"
        :editMode="editMode"
      />
      <a v-if="!editMode" @click="editMode = !editMode" class="button is-danger">Edit</a>
      <a v-if="editMode" @click="editMode = !editMode" class="button is-primary">Save</a>
    </div>
  </div>
</template>

<script>
import uuid from "uuid";
import Phrase from "@/components/Phrase";
export default {
  name: "Phrases",
  components: {
    Phrase
  },
  data() {
    return {
      phrasesData: [
        { id: uuid.v4(), phraseText: "Thank you!" },
        { id: uuid.v4(), phraseText: "Uh oh stinky" }
      ],
      editMode: false
    };
  }
};
</script>

<style>
.phrase-container {
  padding: 0 20px;
}
</style>
