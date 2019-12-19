<template>
  <section class="hero is-medium is-info is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          EZ-Sign -
          <span class="route">{{text}}</span>
        </h1>
        <h2 class="subtitle">{{subtext}}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "Header", props: ["text", "subtext"] };
</script>

<style>
.hero {
  margin-bottom: 20px;
}
.route {
  font-style: italic;
  font-size: 26px;
}
</style>
