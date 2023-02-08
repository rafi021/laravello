<script setup>
import { useQuery, useMutation } from '@vue/apollo-composable';
import { CREATE_CARD } from '../graphql/card';
import { BOARDS_QUERY } from '../graphql/boards';
import { ref,reactive } from 'vue';
import { resetCaches } from 'graphql-tag';

const form = reactive({
    title: 'My New Another Task',
    order: 1,
    owner_id: 1,
    list_id: 1
})

const reset = () => {
    form.title = '';
    form.order = 0;
    form.owner_id = 0;
    form.list_id = 0;
}

const { result, loading, refetch } = useQuery(BOARDS_QUERY);
const { mutate: createCard, error, onDone } = useMutation(CREATE_CARD);

const addNewCard = () => {
    createCard(form);
}

onDone(result => {
    refetch();
    reset();
})
</script>
<template>
    <div @click="addNewCard" class="rounded-sm p-2 text-gray-600 cursor-pointer hover:bg-gray-400 hover:text-gray-800 text-sm">Add New Card</div>
</template>
