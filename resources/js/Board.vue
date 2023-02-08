<script setup>
import CardList from './components/List.vue';

</script>
<template>
    <div class="h-full flex flex-col items-stretch bg-purple-700">
        <div class="header text-white flex justify-between items-center mb-2">
            <div class="ml-2 w-1/3">X</div>
            <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">Laravello</div>
            <div class="mr-2 w-1/3 flex justify-end">X</div>
        </div>

        <div class="h-full flex flex-1 flex-col items-stretch">
            <div class="mx-4 mb-2 text-white font-bold text-lg">The Board Title goes here</div>
            <div class="flex flex-1 items-start overflow-x-auto">
                <CardList />
                <CardList />
                <CardList />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header{
    height: 40px;
}
</style>

