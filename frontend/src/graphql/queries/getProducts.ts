import { gql } from "@apollo/client"

export const GET_ALL_PRODUCTS = gql`
  query GetProducts($skip: Int!, $take: Int!) {
    getProducts(skip: $skip, take: $take) {
      id
      userId
      createdAt
      title
      description
      price
      views
    }
  }
`