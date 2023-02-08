<script setup>
import Card from './Card.vue';
import CardAddButton from './CardAddButton.vue';

const props = defineProps({
    list: Object
})

</script>
<template>
    <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
    <div class="flex justify-between">
        <div class="text-gray-800 pl-2 pb-2 font-bold"> {{ props.list.title }}</div>
    </div>
    <Card :card="card" v-for="card in props.list.cards" :key="card.id"/>
    <CardAddButton/>
</div>
</template>

<style scoped lang="scss">
.list{
    min-width: 250px;
}
</style>

