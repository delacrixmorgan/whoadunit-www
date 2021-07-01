<template>
  <div>
    <label class="form-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'EditTextLabel',
  props: {
    label: {
      type: String,
      require: false,
      default: null,
    },
  },
}
</script>
