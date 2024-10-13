<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ButtonGroup",
  props: ['modelValue', 'options'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get(){return this.modelValue},
      set(value){this.$emit('update:modelValue', value)}
    },
  },
})
</script>

<template>
  <div>
    <q-btn-toggle
      v-model="value"
      color="grey"
      text-color="black"
      toggle-color="red-14"
      toggle-text-color="black"
      padding="0 10px"
      no-wrap
      unelevated
      dense
      :options="options"
    />
  </div>
</template>

<style scoped>

</style>
