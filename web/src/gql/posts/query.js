import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts($orderBy: String, $postType: String) {
    posts(orderBy: $orderBy, postType: $postType) {
      id
      title
      slug
      postType
      photo
      content
      publishDate
      viewCount
      likeCount
      createdAt
    }
  }
`;

export const GET_POST = gql`
  query GetPost($slug: String!) {
    post(slug: $slug) {
      id
      title
      slug
      postType
      photo
      content
      publishDate
      viewCount
      likeCount
      createdAt
    }
  }
`;
