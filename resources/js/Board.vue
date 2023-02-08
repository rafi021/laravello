<script setup>
import CardList from './components/List.vue';
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
const { result, loading } = useQuery(gql`
    query boards{
        boards{
            data{
                id
                title
                color
                created_at
                owner{
                    id
                    name
                }
                lists{
                    id
                    title
                    cards{
                        id
                        title
                    }
                }
            }paginatorInfo{
                count,
                currentPage,
                lastPage
                perPage,
                total
            }
        }
    }
`)
</script>
<template>
    <div class="h-full flex flex-col items-stretch bg-purple-700">
        <div class="header text-white flex justify-between items-center mb-2">
            <div class="ml-2 w-1/3">X</div>
            <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">Laravello</div>
            <div class="mr-2 w-1/3 flex justify-end">X</div>
        </div>

        <div class="h-full flex flex-1 flex-col items-stretch">
            <div class="mx-4 mb-2 text-white font-bold text-lg">
            <span v-if="loading">Loading ....</span>
            <span v-else>{{ result.boards.data[1].title }}</span>
            </div>
            <div class="flex flex-1 items-start overflow-x-auto" v-if="result">
                <CardList :list="list" v-for="list in result.boards.data[1].lists" :key="list.id"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.header{
    height: 40px;
}
</style>

