<template>
  <footer v-if="$route.name != 'home'" class="footer">
    <div class="content has-text-centered">
      <div class="columns">
        <div class="column">
          <a href class="button is-info">Back</a>
        </div>
        <div class="column">
          <a href class="button is-info">Home</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
</style>