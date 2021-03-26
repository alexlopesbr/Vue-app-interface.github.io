<template>
  <nav>
    <h2>200 resultados encontrados</h2>
    <div class="buttons">
      <div @click="open = !open" class="dropdown">
        <span>listagem</span>

        <div v-show="open" class="options">
          <ul @click="open = !open">
            <li>
              <button @click="sort = 'price'">preço</button>
            </li>
            <li>
              <button @click="sort = 'rate'">avaliação</button>
            </li>
            <li>
              <button @click="sort = 'name'">nome</button>
            </li>
            <li>
              <button class="clear" @click="sort = ''">limpar</button>
            </li>
          </ul>
        </div>
      </div>

      <button>
        <img src="../assets/result-display.svg" alt="" />
      </button>

      <button>
        <img src="../assets/result-menu.svg" alt="" />
      </button>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  nome: 'ResultNav',
  data() {
    return {
      open: false,
      sort: ''
    }
  },

  computed: {
    ...mapState(['sortOf'])
  },

  watch: {
    sort() {
      this.$store.commit("changeSort", this.sort);
      this.open = !this.open
    }

  }
}
</script>

<style scoped>
h2 {
  font-weight: 400;
  font-size: 18px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 50px;
}

.buttons {
  display: flex;
  grid-gap: 13px;
}
.dropdown {
  position: relative;
  width: 150px;

  display: grid;
  grid-template-columns: 1fr 16px;
  grid-gap: 30px;
  align-items: center;

  height: 36px;
  padding: 0 13px;

  cursor: pointer;
  border-radius: 4px;

  background: #fff;
}

button {
  height: 36px;
  width: 36px;
  background: #fff;

  border: none;
  border-radius: 4px;

  cursor: pointer;
}

.dropdown::after {
  content: url("../assets/menu-chevron.svg");
  text-align: right;
}

.options {
  position: absolute;
  top: 45px;
  right: 0;

  padding: 5px;

  border-radius: 5px;
  background-color: #fff;
}

.options button {
  width: 100%;
  padding: 20px;
  transition: 0.2s;
}

.clear {
  background-color: #686868;
}

.options button:hover {
  background-color: #efefef;
}

.dropdown,
button {
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
}
</style>