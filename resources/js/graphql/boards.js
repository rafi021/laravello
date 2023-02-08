import gql from 'graphql-tag';

export const BOARDS_QUERY = gql`
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
`
export const CREATE_BOARD = gql`
mutation createBoard (
    $title: String!
    $color: String!
    $owner_id: ID!
) {
    createBoard ( input: {
        title: $title
        color: $color
        owner_id: $owner_id
        })
    {
        id
        title
        color
    }
}
`
export const DELETE_BOARD = gql`
mutation deleteBoard (
    $id: ID!
) {
    deleteBoard (id: $id)
    {
        id
        title
        color
     }
}
`
export const UPDATE_BOARD = gql`
mutation updateBoard (
    $id: ID!
    $title: String!
    $color: String!
    $owner_id: ID!
) {
    updateBoard (id: $id, input: {
        title: $title
        color: $color
        owner_id: $owner_id
        })
    {
        id
        title
        color
        owner_id
     }
}
`
