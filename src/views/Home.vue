<template>
  <NavBar />
  <BreadCrumbs />
  <section class="container">
    <div class="filters">
      <FilterSection />
    </div>
    <div class="results">
      <ResultsSection />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

import NavBar from '@/components/NavBar.vue'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import FilterSection from '@/components/FilterSection.vue'
import ResultsSection from '@/components/ResultsSection.vue'


export default {
  name: 'Home',
  components: {
    NavBar,
    BreadCrumbs,
    FilterSection,
    ResultsSection,
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-gap: 29px;

  grid-template-columns: 371px 1fr;
}
</style>