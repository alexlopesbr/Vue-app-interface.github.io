<template>
  <section class="container">
    <aside>
      <AsideNav />
      <AsideApps />
    </aside>

    <main>
      <router-view />
    </main>
  </section>
</template>

<script>
import AsideNav from "@/components/AsideNav.vue"
import AsideApps from "@/components/AsideApps.vue"

export default {
  components: {
    AsideNav,
    AsideApps,
  },

}
</script>

<style>
/* RESET */
* {
  box-sizing: border-box;
}
body,
ul,
li,
h1,
h2,
h3,
p,
figure,
blockquote {
  margin: 0;
  padding: 0px;
}

h1 {
  font-size: 16px;
  font-weight: 400;
}

h2 {
  font-size: 14px;
  font-weight: 300;
  text-align: left;
}

p {
  font-size: 15px;
}

ul {
  list-style: none;
}

/* GENERAL */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c2c2c;
}

.container {
  display: grid;
  grid-template-columns: 280px 1fr;
}

aside {
  padding: 22px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.170509);
  z-index: 10;
}

main {
  padding: 30px 37px;
  min-height: 100vh;

  background: #e5e5e5;
}
</style>
