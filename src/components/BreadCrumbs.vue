<template>
  <section class="bread">
    <div class="path">
      <h2>Resultados</h2>

      <img
        class="pathSeparator"
        src="../assets/bread-home.svg"
        alt="Imagem da home"
      />

      <p>>> Cursos</p>
    </div>

    <img
      class="settings"
      src="../assets/navbar-settings.svg"
      alt="imagem do botão configurações"
    />
  </section>
</template>

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

.pathSeparator {
  padding: 0 13px;
  border-left: solid 1px var(--mediun-grey);
}

.settings {
  padding: 10px;

  height: 40px;
  width: 40px;

  border-radius: 50%;

  cursor: pointer;
  background: var(--mediun-grey);
}
</style>