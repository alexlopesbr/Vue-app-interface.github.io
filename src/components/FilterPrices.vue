<template>
  <section class="filters">
    <div class="prices">
      <h3>Preços</h3>
      <div class="radios">
        <input type="radio" id="ten" value="10" v-model="picked" />
        <label for="ten">R$10</label>

        <input type="radio" id="hundred" value="10-100" v-model="picked" />
        <label for="hundred">R$10-R$100</label>

        <input type="radio" id="five-hun" value="100-500" v-model="picked" />
        <label for="five-hun">R$100-R$500</label>

        <input type="radio" id="five-hun-above" value="500" v-model="picked" />
        <label for="five-hun-above">R$500</label>

        <input type="radio" id="all" value="all" v-model="picked" />
        <label for="all">Todos</label>
      </div>
    </div>
  </section>
  <hr />
</template>

<script>

export default {
  name: 'FilterPrices',
  data() {
    return {
      picked: 'all'
    }
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 21px;
}

.radios {
  display: flex;
  flex-direction: column;

  grid-gap: 10px;
}

input[type="radio"] {
  display: none;
}

input[type="radio"] + label {
  display: inline-block;
  height: 20px;
  padding: 0 0 0 25px;
  margin: 0 10px 0 0;
  background-image: url(../assets/radios.svg);
  background-repeat: no-repeat;
  background-position: 0 0;
}

input[type="radio"]:checked + label {
  background-position: 0 -30px;
}
hr {
  margin: 20px 0;
}
</style>