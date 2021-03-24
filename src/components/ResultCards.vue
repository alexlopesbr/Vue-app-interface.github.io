<template>
  <section class="card">
    <figure>
      <img src="../assets/card-picture.svg" alt="" />
    </figure>

    <article>
      <h1>FÓRMULA DE LANÇAMENTO</h1>
      <cite>Por <strong>Érico Rocha</strong></cite>
      <blockquote>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </blockquote>
    </article>

    <div class="buy">
      <div class="rating">
        <span>3.4</span>
        <img src="../assets/card-star.svg" alt="" />
      </div>

      <span>R$2500</span>

      <button class="btn-heart">
        <img src="../assets/card-heart.svg" alt="" />AMEI
      </button>

      <button class="btn-buy">
        <img src="../assets/card-bag.svg" alt="" />COMPRAR
      </button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.card {
  display: grid;
  grid-template-columns: auto 1fr 227px;
  grid-gap: 23px;

  padding: 20px 20px 20px 10px;
  margin: 10px 0;
  border-radius: 8px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background-color: #fff;
}

article h1 {
  margin: 10px 0;
}

cite {
  font-size: 12px;
  color: #7e7e7e;
}

blockquote {
  font-weight: 300;
  font-size: 14px;
  line-height: 23px;
}
.buy {
  display: grid;
  grid-template-columns: 1fr;

  padding-left: 20px;

  border-left: solid 2px #dadada;
}
.rating {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 5px;

  justify-self: right;

  align-items: center;
  height: 30px;
  width: 60px;

  text-align: center;

  color: #fff;
  background-color: #787878;
  border-radius: 3px;
}

.buy span {
  text-align: center;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 8px;

  font-size: 14px;

  border: none;
  border-radius: 8px;
}

.btn-heart,
.btn-buy {
  cursor: pointer;
  transition: all 0.2s;
}

.btn-heart:hover {
  background-color: #7e7e7e;
}

.btn-buy {
  margin-top: 11px;
  color: #fff;
  background-color: #787878;
}

.btn-buy:hover {
  background-color: #ededed;
  color: initial;
  fill: black;
}
</style>