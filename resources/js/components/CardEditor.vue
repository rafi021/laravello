<script setup>
import { ref } from 'vue';
const title = ref(null);

</script>

<template>
    <div class="">
        <textarea name="title" v-model="title" cols="30" rows="10" class="shadow-card rounded-md py-1 px-2 outline-none w-full
         text-gray-900 text-sm bg-white h-16 resize-none" placeholder="Enter a title for this card.."></textarea>
    </div>
</template>
