import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products {
    products {
      name
      price
      id
      mainImg
    }
  }
`;

export const GET_PRODUCT_DETAIL = gql`
  query ProductDetail($productId: ID!) {
    product(productId: $productId) {
      name
      description
      price
      mainImg
      creator
      Category {
        name
      }
    }
    productImages(id: $productId) {
      imgUrl
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;
