import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation CreatePost(
    $title: String!
    $photo: String!
    $content: String
    $postType: PostType!
    $publishDate: String
    $viewCount: Int
    $likeCount: Int
  ) {
    createPost(
      data: {
        title: $title
        photo: $photo
        content: $content
        postType: $postType
        publishDate: $publishDate
        viewCount: $viewCount
        likeCount: $likeCount
      }
    ) {
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

export const UPDATE_POST = gql`
  mutation UpdatePost(
    $id: ID!
    $title: String
    $photo: String
    $postType: PostType
    $content: String
    $publishDate: String
    $viewCount: Int
    $likeCount: Int
  ) {
    updatePost(
      id: $id
      data: {
        title: $title
        photo: $photo
        content: $content
        postType: $postType
        publishDate: $publishDate
        viewCount: $viewCount
        likeCount: $likeCount
      }
    ) {
      title
      photo
      content
      publishDate
      viewCount
      postType
      likeCount
      user {
        id
        nameSurname
        username
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
