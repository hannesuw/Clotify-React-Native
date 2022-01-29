import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($newProduct: ProductInput) {
    addProduct(newProduct: $newProduct) {
      id
      name
    }
  }
`;
