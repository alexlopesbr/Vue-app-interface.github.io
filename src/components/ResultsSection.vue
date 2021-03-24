<template>
  <ResultNav />
  <ResultSearch />
  <ResultCards />
</template>

<script>
import ResultNav from '@/components/ResultNav.vue'
import ResultSearch from '@/components/ResultSearch.vue'
import ResultCards from '@/components/ResultCards.vue'
export default {
  name: 'ResultsSection',
  components: {
    ResultNav,
    ResultSearch,
    ResultCards
  }
}
</script>

<style scoped>
</style>