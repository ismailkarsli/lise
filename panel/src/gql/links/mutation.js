import { gql } from "@apollo/client";

export const CREATE_LINK = gql`
  mutation CreateLink($name: String!, $url: String!) {
    createLink(data: { name: $name, url: $url }) {
      id
      name
      url
    }
  }
`;

export const UPDATE_LINK = gql`
  mutation UpdateLink($id: ID!, $name: String, $url: String) {
    updateLink(id: $id, data: { name: $name, url: $url }) {
      id
      name
      url
    }
  }
`;

export const DELETE_LINK = gql`
  mutation DeleteLink($id: ID!) {
    deleteLink(id: $id) {
      id
      name
      url
    }
  }
`;
