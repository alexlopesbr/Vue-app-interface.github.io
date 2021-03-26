<template>
  <button>LIMPAR FILTRO</button>
</template>

<script>
export default {
  name: 'FilterClear'
}
</script>

<style scoped>
button {
  width: 279px;
  height: 56px;

  margin: 65px auto 0 auto;
  display: block;
  border: none;
  border-radius: 8px;

  background-color: var(--mediun-grey);
  color: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  transition: all 0.2s;
}

button:hover {
  background: var(--dark-grey);
}
</style>