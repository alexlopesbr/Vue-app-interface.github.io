<template>
  <div class="input">
    <input type="text" name="search" id="search" placeholder="Buscar" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
input {
  height: 62px;
  width: 100%;
  padding: 0 20px;

  border: none;

  font-weight: 300;
  font-size: 22px;
  color: #999999;
}

::-webkit-input-placeholder {
  color: #999999;
}

:-moz-placeholder {
  /* Firefox 18- */
  color: #999999;
}

::-moz-placeholder {
  /* Firefox 19+ */
  color: #999999;
}

:-ms-input-placeholder {
  color: #999999;
}

.input {
  border-radius: 8px;
  padding: 2px;
  border: none;
  background: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
}

.input::after {
  content: url("../assets/navbar-search.svg");
  margin: -35px;
}
</style>