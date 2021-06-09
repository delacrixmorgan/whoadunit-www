<template>
  <div class="flex flex-col h-screen">
    <Header />
    <Nuxt class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/UI/Header.vue'
import Footer from '@/components/UI/Footer.vue'

export default {
  components: { Header, Footer },
}
</script>
