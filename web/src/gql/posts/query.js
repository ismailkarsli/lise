import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts($orderBy: String, $where: String, $skip: Int, $first: Int) {
    posts(orderBy: $orderBy, where: $where, skip: $skip, first: $first) {
      id
      title
      slug
      postType
      photo
      content
      inSlide
      startDate
      endDate
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
      inSlide
      startDate
      endDate
      photo
      content
      publishDate
      viewCount
      likeCount
      createdAt
    }
  }
`;

export const GET_SLIDES = gql`
  query GetSlides {
    slides {
      id
      title
      slug
      postType
      inSlide
      startDate
      endDate
      photo
      content
      publishDate
      viewCount
      likeCount
      createdAt
    }
  }
`;
