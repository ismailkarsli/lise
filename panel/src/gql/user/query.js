import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query User {
    users {
      id
      nameSurname
      username
      userType
    }
  }
`;

export const GET_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      nameSurname
      username
      userType
    }
  }
`;
