<script setup>
const props = defineProps({
    card: Object
})

</script>
<template>
     <div class="bg-white card rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2">{{ props.card.title }}
     </div>
</template>
<style scoped lang="scss">
.card{
    box-shadow: 0 1px 0 rgba(9, 30, 66 , 0.25);
}
</style>
