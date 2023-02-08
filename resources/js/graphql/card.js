import gql from 'graphql-tag';

export const CARDS_QUERY = gql`
query cards{
    cards{
        data{
            id
            title
            order
            created_at
            owner{
                id
                name
            }
            list{
                id
                title
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
`
export const CREATE_CARD = gql`
mutation createCard (
    $title: String!
    $order: Int!
    $owner_id: ID!
    $list_id: ID!
) {
    createCard ( input: {
        title: $title
        order: $order
        owner_id: $owner_id
        list_id: $list_id
        })
    {
        id
        title
        order
        created_at
        owner{
            id
            name
        }
        list{
            id
            title
        }
    }
}
`
export const DELETE_CARD = gql`
mutation deleteCard (
    $id: ID!
) {
    deleteCard (id: $id)
    {
        id
        title
        order
        created_at
        owner{
            id
            name
        }
        list{
            id
            title
        }
     }
}
`
export const UPDATE_CARD = gql`
mutation updateCard (
    $id: ID!
    $title: String!
    $order: Int!
    $owner_id: ID!
    $list_id: ID!
) {
    updateCard (id: $id, input: {
        title: $title
        order: $order
        owner_id: $owner_id
        list_id: $list_id
        })
    {
        id
        title
        order
        created_at
        owner{
            id
            name
        }
        list{
            id
            title
        }
     }
}
`
