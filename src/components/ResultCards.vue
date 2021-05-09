<template>
  <section v-for="(api, index) in sort" :key="index" class="card">
    <img src="../assets/card-picture.svg" alt="Imagem do produto" />

    <article>
      <h1>{{ api.title }}</h1>
      <cite
        >Por <strong>{{ api.name }}</strong></cite
      >
      <blockquote>
        {{ api.content }}
      </blockquote>
    </article>

    <div class="buy">
      <div class="rating">
        <span>{{ api.rate }}</span>
        <img
          src="../assets/card-star.svg"
          alt="Imagem de estrela da avaliação"
        />
      </div>

      <span>R${{ api.price }}</span>

      <button class="btn-heart">
        <img
          src="../assets/card-heart.svg"
          alt="Imagem de coração do botão amei"
        />AMEI
      </button>

      <button class="btn-buy">
        <img
          src="../assets/card-bag.svg"
          alt="Imagem de bolsa de compras do botão comprar"
        />COMPRAR
      </button>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      apis: null,
      typeSort: '',
    };
  },

  mounted() {
    axios.get('http://localhost:3000/products').then((r) => {
      this.apis = r.data;
    });
  },

  computed: {
    ...mapState(['sortOf']),
    sort() {
      return _.orderBy(this.apis, this.typeSort);
    },
  },

  watch: {
    sortOf() {
      this.typeSort = this.sortOf;
    },
  },
};
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
  background-color: var(--white);
}

article h1 {
  margin: 10px 0;
}

cite {
  font-size: 0.75rem;
  color: var(--mediun-grey);
}

blockquote {
  font-weight: 300;
  font-size: 0.875rem;
  line-height: 23px;
}

.buy {
  display: grid;
  grid-template-columns: 1fr;

  padding-left: 20px;

  border-left: solid 2px var(--light-grey);
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
  background-color: var(--mediun-grey);
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

  font-size: 0.875rem;

  border: none;
  border-radius: 8px;
}

.btn-heart,
.btn-buy {
  cursor: pointer;
  transition: all 0.2s;
}

.btn-heart:hover {
  background-color: var(--mediun-grey);
}

.btn-buy {
  margin-top: 11px;
  color: #fff;
  background-color: var(--mediun-grey);
}

.btn-buy:hover {
  background-color: var(--light-grey);
  color: initial;
}
</style>
