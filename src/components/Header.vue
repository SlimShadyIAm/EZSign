<template>
  <section class="hero is-medium is-info is-bold">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <router-link to="/" class="navbar-item">EZ-Sign</router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
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

.navbar-brand {
  font-weight: 800;
}
</style>
