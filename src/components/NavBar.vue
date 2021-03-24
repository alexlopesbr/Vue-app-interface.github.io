<template>
  <nav>
    <ul class="icons">
      <li>
        <figure>
          <img src="../assets/menu-check-square.svg" alt="" />
        </figure>
      </li>
      <li>
        <figure>
          <img src="../assets/menu-message-square.svg" alt="" />
        </figure>
      </li>
      <li>
        <figure>
          <img src="../assets/menu-mail.svg" alt="" />
        </figure>
      </li>
      <li>
        <figure>
          <img src="../assets/menu-calendar.svg" alt="" />
        </figure>
      </li>
      <li>
        <figure>
          <img src="../assets/navbar-star.svg" alt="" />
        </figure>
      </li>
    </ul>
    <ul class="info">
      <li>
        <figure>
          <img src="../assets/navbar-bell.svg" alt="" />
        </figure>
      </li>
      <li>
        <figure>
          <img src="../assets/navbar-search.svg" alt="" />
        </figure>
      </li>
      <li>
        <div class="name">
          <p>Maria Elza</p>
          <p>Cliente VIP</p>
        </div>
      </li>
      <li>
        <figure>
          <img src="../assets/navbar-oval.svg" alt="" />
        </figure>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
nav {
  height: 62px;
  padding: 0 5px;

  display: flex;
  justify-content: space-between;

  background: #ffffff;
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
  background-color: #cecece;
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
  font-size: 14px;
}
.name p:last-child {
  font-size: 11px;
}
</style>