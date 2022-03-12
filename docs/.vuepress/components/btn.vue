<template>
    <div>
        <button
            class="audition-btn"
            :class="{select: isLook}"
            @click="btnClick"
        >{{ isLook ? '背答案' : '考试中'}}</button>
        <h3 v-if="isLook">123</h3>
    </div>
</template>

<script>
export default {
  name: 'Btn',
  data() {
    return {
      isLook: true
    }
  },
  methods: {
    btnClick() {
      this.isLook = !this.isLook
      this.$emit('isLook', this.isLook)
    },
  }
}
</script>
<style scoped></style>
