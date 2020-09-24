import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $password: String!
    $userType: UserType!
  ) {
    createUser(
      data: { username: $username, password: $password, userType: $userType }
    ) {
      id
      username
      userType
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: ID!
    $username: String
    $password: String
    $userType: UserType
  ) {
    updateUser(
      id: $id
      data: { username: $username, password: $password, userType: $userType }
    ) {
      id
      username
      userType
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`;
