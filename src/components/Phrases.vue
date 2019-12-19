<template>
  <div>
    <div class="phrase-container">
      <Phrase v-for="phrase in phrasesData" :key="phrase.id" :phrase="phrase.phraseText" />
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
        { id: uuid.v4(), phraseText: "Helloooo" },
        { id: uuid.v4(), phraseText: "Helloooo" }
      ]
    };
  }
};
</script>

<style>
.phrase-container {
  padding: 0 20px;
}
</style>
