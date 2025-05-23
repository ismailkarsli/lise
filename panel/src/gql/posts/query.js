import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query Posts($orderBy: String, $where: String) {
    posts(orderBy: $orderBy, where: $where) {
      id
      slug
      title
      photo
      content
      postType
      inSlide
      startDate
      endDate
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
      inSlide
      startDate
      endDate
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
