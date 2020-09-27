import { gql } from "@apollo/client";

export const GET_LINKS = gql`
  query Links {
    links {
      id
      name
      url
    }
  }
`;

export const GET_LINK = gql`
  query Link($id: ID!) {
    link(id: $id) {
      id
      name
      url
    }
  }
`;
