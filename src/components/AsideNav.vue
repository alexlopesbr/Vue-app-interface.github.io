<template>
  <nav id="nav">
    <img
      src="../assets/menu-brand.svg"
      alt="Logo Ignição Digital"
      class="logo"
    />

    <div @click="open = !open" class="dropdown">
      {{ currentPage }}
    </div>

    <div v-show="open" class="options">
      <ul @click="open = !open">
        <li>
          <router-link to="/">Área do cliente</router-link>
        </li>

        <li>
          <router-link :disabled="true" tag="button" to="/about"
            >Outra área</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      currentPage: 'Área do cliente',
      open: false
    }
  },
}
</script>

<style scoped>
#nav {
  margin-bottom: 80px;
  position: relative;
}

#nav a {
  font-family: "Montserrat", sans-serif;
  color: var(--dark-grey);
  text-decoration: none;
}

#nav a.router-link-exact-active {
  font-weight: bold;
}

.logo {
  display: block;
  margin: 0 auto 20px auto;
}

.dropdown {
  display: grid;
  grid-template-columns: 16px 1fr 16px;
  align-items: center;

  text-align: center;

  width: 100%;
  height: 36px;
  padding: 0 13px;
  background-color: var(--light-grey);
  border-radius: 4px;
}

.dropdown::before {
  content: url("../assets/menu-home.svg");
}

.dropdown::after {
  content: url("../assets/menu-chevron.svg");
  cursor: pointer;
}

.options {
  position: absolute;
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  background-color: var(--light-grey);
  border-radius: 5px;
}
</style>