<template>
    <span style="color: #4D77FF;">{{ str }}</span>
</template>

<script>
export default {
  name: 'Str',
  props: {
    str: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped></style>
