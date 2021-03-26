<template>
  <section class="apps">
    <h2>APPS</h2>

    <ul>
      <li @click="openmodal">
        <img src="../assets/menu-mail.svg" alt="Email link" />
        <p>Email</p>
      </li>

      <li>
        <img src="../assets/menu-message-square.svg" alt="Menssagem link" />
        <p>Conversar</p>
      </li>

      <li>
        <img src="../assets/menu-check-square.svg" alt="Todo link" />
        <p>Todo</p>
      </li>

      <li>
        <img src="../assets/menu-calendar.svg" alt="Calendario link" />
        <p>Calendário</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'MyApps',
}
</script>

<style scoped>
.apps h2 {
  margin-bottom: 10px;
}

.apps li {
  display: flex;
  align-items: center;

  padding: 10px 0;
  border-bottom: solid 2px transparent;

  cursor: pointer;
  transition: all 0.3s;
}

.apps li:hover {
  border-bottom: solid 2px var(--mediun-grey);
}

.apps li img {
  margin-right: 10px;
}
</style>