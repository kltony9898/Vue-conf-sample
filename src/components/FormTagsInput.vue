<script setup lang='ts'>
import { ref } from 'vue'
const props = defineProps(['tags'])
const inputText = ref('')

const addTag = (event) => {
  props.tags.push(inputText.value)
  inputText.value = ''
}

const deleteTag = (index) => {
  props.tags.splice(index, 1)
}

</script>

<template>
  <div>
    <input 
      v-model="inputText"
      @keyup.enter="addTag"
      type="text"
    />
    <div class="flex gap-03 mt-03">
      <div 
        v-for="(item, index) in props.tags"
        :index="`${item+index}`"
        class="flex bg-pink-500 gap-8px px-03 py-01"
      >
        <div class="bg-pink-500"> {{item}}</div>
        <span 
          class="cursor-pointer"
          @click="deleteTag(index)"
        > x </span>
      </div>
    </div>
  </div>
</template>