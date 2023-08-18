<script setup>
  import { computed, ref, watch } from "vue";
  import { onClickOutside } from "@vueuse/core";

  const props = defineProps({
    modelValue: {
      type: String,
      default: "",
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const inputRef = ref(null);

  const validateError = ref(false);

  onClickOutside(inputRef, (event) => {
    isShowSolid.value = false;
  });

  const updateValue = (value) => {
    emit("update:modelValue", value);
  };

  const checkIdFormat = (inputId) => {
    const regex = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
    return regex.test(inputId);
  };

  const validateIdFormat = (inputId) => {
    if (inputId.length === 0) {
      validateError.value = false;
      return;
    }
    if (!checkIdFormat(inputId)) {
      validateError.value = "身分證字號格式不符";
      return;
    } else {
      validateError.value = false;
      return;
    }
  };

  watch(
    () => props.modelValue,
    () => {
      validateIdFormat(props.modelValue);
    }
  );
</script>

<template>
  <div relative w-full h-30px>
    <input
      ref="inputRef"
      w-full
      h-full
      pl-10px
      :value="modelValue"
      border="1px gray-4 solid"
      placeholder="請輸入身分證字號"
      @input="updateValue($event.target.value)"
      @focus="onFocus"
    />
    <div v-if="validateError" text-red>
      {{ validateError }}
    </div>
  </div>
</template>

<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
