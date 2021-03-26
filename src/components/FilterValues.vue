<template>
  <div class="head">
    <h3>Valores</h3>
    <p>{{ value[0] }} - {{ value[1] }}</p>
  </div>

  <Slider v-model="value" :tooltips="tooltips" :min="min" :max="max" />
  <hr />
</template>

<script>
import Slider from '@vueform/slider'
import { mapState } from 'vuex'


export default {
  name: 'FilterValues',

  components: { Slider },

  data: () => ({
    value: [0, 500],

    tooltips: false,
    min: 0,
    max: 500
  }),

  computed: {
    ...mapState(['price']),
  },

  watch: {
    price() {
      this.value = [parseInt(this.price[0], 10), parseInt(this.price[1], 10)]
    }
  }
}
</script>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;

  margin-bottom: 15px;
}

p {
  font-weight: bold;
  font-size: 20px;
}

hr {
  margin: 20px 0;
}
</style>

<style src="@vueform/slider/themes/default.css"></style>