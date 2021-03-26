<template>
  <h2>Filtros</h2>
  <div class="filters">
    <FilterPrices />
    <FilterValues />
    <FilterCategories />
    <FilterRating />
    <FilterClear />
  </div>
</template>

<script>
import FilterPrices from '@/components/FilterPrices.vue'
import FilterValues from '@/components/FilterValues.vue'
import FilterCategories from '@/components/FilterCategories.vue'
import FilterRating from '@/components/FilterRating.vue'
import FilterClear from '@/components/FilterClear.vue'

export default {
  name: 'FilterSection',
  components: {
    FilterPrices,
    FilterValues,
    FilterCategories,
    FilterRating,
    FilterClear
  }
}
</script>

<style scoped>
h2 {
  font-weight: 400;
  font-size: 1.125rem;

  height: 50px;
}

.filters {
  padding: 25px 31px;

  border-radius: 8px;
  background: var(--white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
}
</style>