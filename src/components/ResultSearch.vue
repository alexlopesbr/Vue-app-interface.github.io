<template>
  <div class="input">
    <input type="text" name="search" id="search" placeholder="Buscar" />
  </div>
</template>

<style scoped>
input {
  height: 62px;
  width: 100%;
  padding: 0 20px;

  border: none;

  font-weight: 300;
  font-size: 1.375rem;
  color: var(--mediun-grey);
}

::-webkit-input-placeholder {
  color: var(--mediun-grey);
}

:-moz-placeholder {
  /* Firefox 18- */
  color: var(--mediun-grey);
}

::-moz-placeholder {
  /* Firefox 19+ */
  color: var(--mediun-grey);
}

:-ms-input-placeholder {
  color: var(--mediun-grey);
}

.input {
  padding: 2px;

  border: none;
  border-radius: 8px;

  background: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
}

.input::after {
  content: url("../assets/navbar-search.svg");
  margin: -35px;
}
</style>