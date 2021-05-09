<template>
  <h3>Categorias</h3>

  <div class="inputs">
    <input type="checkbox" id="erico" value="Lorem 1" v-model="checkedNames" />
    <label for="jack">Lorem 1</label>
    <span>1920</span>

    <input
      type="checkbox"
      id="desafio"
      value="Lorem 2"
      v-model="checkedNames"
    />
    <label for="john">Lorem 2</label>
    <span>1820</span>

    <input
      type="checkbox"
      id="formula"
      value="Lorem 3"
      v-model="checkedNames"
    />
    <label for="mike">Lorem 3</label>
    <span>462</span>

    <input type="checkbox" id="kick" value="Lorem 4" v-model="checkedNames" />
    <label for="mike">Lorem 4</label>
    <span>6556</span>

    <input type="checkbox" id="audios" value="Lorem 5" v-model="checkedNames" />
    <label for="mike">Lorem 5</label>
    <span>120</span>
  </div>
  <hr />
</template>

<script>
export default {
  name: 'FilterCategories',
  data() {
    return {
      checkedNames: [],
    };
  },
};
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
