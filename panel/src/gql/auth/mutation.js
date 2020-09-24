import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(data: { username: $username, password: $password }) {
      token
      #user
    }
  }
`;
