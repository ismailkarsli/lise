import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query Posts($orderBy: String, $postType: String) {
    posts(orderBy: $orderBy, postType: $postType) {
      id
      slug
      title
      photo
      content
      postType
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

export const GET_POST = gql`
  query Post($slug: String!) {
    post(slug: $slug) {
      id
      slug
      title
      photo
      content
      publishDate
      viewCount
      postType
      likeCount
      user {
        username
        nameSurname
      }
    }
  }
`;
