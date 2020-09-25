import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $username: String!
    $password: String!
    $nameSurname: String!
    $userType: UserType!
  ) {
    createUser(
      data: {
        username: $username
        password: $password
        nameSurname: $nameSurname
        userType: $userType
      }
    ) {
      id
      nameSurname
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
    $nameSurname: String
    $userType: UserType
  ) {
    updateUser(
      id: $id
      data: {
        username: $username
        password: $password
        nameSurname: $nameSurname
        userType: $userType
      }
    ) {
      id
      nameSurname
      username
      userType
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      nameSurname
      username
      userType
    }
  }
`;
