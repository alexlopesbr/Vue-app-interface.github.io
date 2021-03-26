<template>
  <h3>Categorias</h3>

  <div class="inputs">
    <input
      type="checkbox"
      id="erico"
      value="Érico Rocha"
      v-model="checkedNames"
    />
    <label for="jack">Érico Rocha</label>
    <span>1920</span>

    <input
      type="checkbox"
      id="desafio"
      value="Desafio 6 em 7"
      v-model="checkedNames"
    />
    <label for="john">Desafio 6 em 7</label>
    <span>1820</span>

    <input
      type="checkbox"
      id="formula"
      value="Fórmula de lançamento"
      v-model="checkedNames"
    />
    <label for="mike">Fórmula de lançamento</label>
    <span>462</span>

    <input
      type="checkbox"
      id="kick"
      value="KlickPages"
      v-model="checkedNames"
    />
    <label for="mike">KlickPages</label>
    <span>6556</span>

    <input type="checkbox" id="audios" value="Audios" v-model="checkedNames" />
    <label for="mike">Audios</label>
    <span>120</span>
  </div>
  <hr />
</template>

<script>
export default {
  name: 'FilterCategories',
  data() {
    return {
      checkedNames: []
    }
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 20px;
}

.inputs {
  display: grid;
  grid-template-columns: auto 1fr auto;
}

span {
  text-align: right;
}

hr {
  margin: 20px 0;
}
</style>