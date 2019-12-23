<template>
  <div class="content">
    <Header></Header>
    <div class="flex-container">
      <article class="message is-info">
        <div class="message-header">
          <p>Information</p>
        </div>
        <div class="message-body">
          Hello! My name is John Doe. This app will translate my sign
          language. Press "Start Transcribing" and record me!
        </div>
      </article>
      <a href class="button">Start Transcribing</a>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Transcribe",
  components: {
    Header
  }
};
</script>

<style>
.flex-container {
  margin: 0 20px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}
.flex-container > *:last-child {
  align-self: flex-end;
}
</style>
