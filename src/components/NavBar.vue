<template>
  <nav>
    <ul class="icons">
      <li>
        <img
          src="../assets/menu-check-square.svg"
          alt="imagem do botão de check"
        />
      </li>
      <li>
        <img
          src="../assets/menu-message-square.svg"
          alt="imagem do botão de mensagem"
        />
      </li>
      <li>
        <img src="../assets/menu-mail.svg" alt="imagem do botão de e-mail" />
      </li>
      <li>
        <img
          src="../assets/menu-calendar.svg"
          alt="imagem do botão de calendário"
        />
      </li>
      <li>
        <img
          src="../assets/navbar-star.svg"
          alt="imagem do botão de favoritos"
        />
      </li>
    </ul>
    <ul class="info">
      <li>
        <img
          src="../assets/navbar-bell.svg"
          alt="imagem do botão de notificações"
        />
      </li>
      <li>
        <img
          src="../assets/navbar-search.svg"
          alt="imagem do botão de pesquisa"
        />
      </li>
      <li>
        <div class="name">
          <p>Maria Elza</p>
          <p>Cliente VIP</p>
        </div>
      </li>
      <li>
        <img src="../assets/navbar-oval.svg" alt="imagem da foto do usuário" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
nav {
  height: 62px;
  padding: 0 5px;

  display: flex;
  justify-content: space-between;

  background: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
}

li {
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.2s;
}

li:hover {
  background-color: var(--light-grey);
}

.icons,
.info {
  display: flex;
  align-items: center;
}
.name p {
  text-align: right;
}
.name p:first-child {
  font-size: 0.875;
}
.name p:last-child {
  font-size: 0.688rem;
}
</style>