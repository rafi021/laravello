<script setup>
import Card from './Card.vue';
import CardAddButton from './CardAddButton.vue';

</script>
<template>
    <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
    <div class="flex justify-between">
        <div class="text-gray-800 pl-2 pb-2 font-bold">List Title</div>
    </div>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <CardAddButton/>
</div>
</template>

<style scoped lang="scss">
.list{
    min-width: 250px;
}
</style>

