import { gql } from "@apollo/client";

export const CREATE_ANNOUNCEMENT = gql`
  mutation CreateAnnouncement(
    $title: String!
    $photo: String!
    $content: String
    $publishDate: String
    $viewCount: Int
    $likeCount: Int
  ) {
    createAnnouncement(
      data: {
        title: $title
        photo: $photo
        content: $content
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
      likeCount
      user {
        username
        nameSurname
      }
    }
  }
`;

export const UPDATE_ANNOUNCEMENT = gql`
  mutation UpdateAnnouncement(
    $id: ID!
    $title: String
    $photo: String
    $content: String
    $publishDate: String
    $viewCount: Int
    $likeCount: Int
  ) {
    updateAnnouncement(
      id: $id
      data: {
        title: $title
        photo: $photo
        content: $content
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
      likeCount
      user {
        id
        nameSurname
        username
      }
    }
  }
`;

export const DELETE_ANNOUNCEMENT = gql`
  mutation DeleteAnnouncement($id: ID!) {
    deleteAnnouncement(id: $id) {
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
