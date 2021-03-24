<template>
  <section class="bread">
    <div class="path">
      <h2>Resultados</h2>

      <figure>
        <img src="../assets/bread-home.svg" alt="" />
      </figure>

      <p>>> Cursos</p>
    </div>
    <figure class="settings">
      <img src="../assets/navbar-settings.svg" alt="" />
    </figure>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.path,
.bread {
  display: flex;
  align-items: center;
}

.bread {
  justify-content: space-between;
  margin: 25px 0;
}

h2 {
  margin-right: 43px;
}

.path figure {
  padding: 0 13px;
  border-left: solid 1px #979797;
}
.settings {
  padding: 10px;

  height: 40px;
  width: 40px;

  border-radius: 50%;

  background: #717171;
  cursor: pointer;
}
</style>