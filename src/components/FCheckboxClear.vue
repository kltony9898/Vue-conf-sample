<script setup>
import { computed } from "vue";

const props = defineProps({
 data: {
  type: Array,
  default: () => []
 },
 curValue: {
  type: Array,
  default: () => []
 }
});

const emit = defineEmits(["update"]);

const curValue =  computed({
  get: () => props.curValue,
  set: (val) => emit('update', val)
})

const clearAll = () => {
  curValue.value = []
}

</script>

<template>
  <div class="flex text-14px gap-10px">
    <button @click="clearAll" class="close">x</button>
    <label v-for="(text, tIdx) in data" :key="tIdx" class="checkbox flex items-center">
      <input type="checkbox" :value="text" v-model="curValue" />
      {{text}}
    </label>

  </div>
</template>

<style scoped>
.checkbox {
  cursor: pointer;
}

.close {
  border-radius: 50px;
  border: 1px solid #ddd;
  cursor: pointer;
}
</style>
