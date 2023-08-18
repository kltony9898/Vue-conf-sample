<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const bindingValue = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

const emit = defineEmits(['update:modelValue']);

const inputRef = ref(null);
const isValid = ref(true);

const emailRegexp = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
);

const validModelValue = () => {
  isValid.value = emailRegexp.test(bindingValue.value);
};

const errorMessage = '錯誤的 Email 格式';
</script>

<template>
  <div>
    <input ref="inputRef" v-model="bindingValue" class="block w-full h-full" @input="validModelValue" />
    <em v-if="!isValid" class="text-red-5">{{ errorMessage }}</em>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
