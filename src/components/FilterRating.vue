<template>
  <h3>Avaliação</h3>
  <ul>
    <li>
      <img src="../assets/rating-five-star.svg" alt="" /><span>8500</span>
    </li>

    <li>
      <img src="../assets/rating-four-star.svg" alt="" /><span>3250</span>
    </li>

    <li>
      <img src="../assets/rating-three-star.svg" alt="" /><span>1120</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'FilterRating'
}
</script>

<style scoped>
h3 {
  margin: 20px 0;
}
li {
  display: flex;
  justify-content: space-between;
}

li + li {
  margin-top: 15px;
}
</style>