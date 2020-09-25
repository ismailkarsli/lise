import { gql } from "@apollo/client";

export const CREATE_NEW = gql`
  mutation CreateNew(
    $title: String!
    $photo: String!
    $content: String!
    $publishDate: String!
    $viewCount: Int!
    $likeCount: Int!
    $user: String!
  ) {
    createNew(
      data: {
        title: $title
        photo: $photo
        content: $content
        publishDate: $publishDate
        viewCount: $viewCount
        likeCount: $likeCount
        user: $user
      }
    ) {
      title
      photo
      content
      publishDate
      viewCount
      likeCount
      user {
        username
        nameSurname
      }
    }
  }
`;

export const UPDATE_NEW = gql`
  mutation UpdateNew(
    $id: ID!
    $title: String
    $photo: String
    $content: String
    $publishDate: String
    $viewCount: Int
    $likeCount: Int
    $user: String
  ) {
    updateNew(
      id: $id
      data: {
        title: $title
        photo: $photo
        content: $content
        publishDate: $publishDate
        viewCount: $viewCount
        likeCount: $likeCount
        user: $user
      }
    ) {
      title
      photo
      content
      publishDate
      viewCount
      likeCount
      user {
        id
        nameSurname
        username
      }
    }
  }
`;

export const DELETE_NEW = gql`
  mutation DeleteNew($id: ID!) {
    deleteNew(id: $id) {
      id
    }
  }
`;
