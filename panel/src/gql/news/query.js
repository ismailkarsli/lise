import { gql } from "@apollo/client";

export const GET_NEWS = gql`
  query News {
    news {
      id
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

export const GET_NEW = gql`
  query New($id: ID!) {
    new(id: $id) {
      id
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
