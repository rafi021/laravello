<script setup>
import { useQuery, useMutation } from '@vue/apollo-composable';
import { CREATE_CARD } from '../graphql/card';
import { ref,reactive } from 'vue';

const form = reactive({
    title: 'My New Task',
    order: 1,
    owner_id: 1,
    list_id: 1
})

const { mutate: createCard, error } = useMutation(CREATE_CARD);

const addNewCard = () => {
    createCard(form);
}

</script>
<template>
    <div @click="addNewCard" class="rounded-sm p-2 text-gray-600 cursor-pointer hover:bg-gray-400 hover:text-gray-800 text-sm">Add New Card</div>
</template>
