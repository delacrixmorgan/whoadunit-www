<template>
  <div>
    <hero-section />
    <stepper />
  </div>
</template>

<script>
import HeroSection from '@/components/UI/HeroSection.vue'
import Stepper from '@/components/UI/Stepper.vue'

export default {
  components: { HeroSection, Stepper },
}
</script>
