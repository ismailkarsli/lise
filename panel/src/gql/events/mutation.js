import { gql } from "@apollo/client";

export const CREATE_EVENT = gql`
  mutation CreateEvet(
    $title: String!
    $photo: String!
    $content: String
    $publishDate: String
    $viewCount: Int
    $likeCount: Int
    $startDate: String
    $endDate: String
  ) {
    createEvent(
      data: {
        title: $title
        photo: $photo
        content: $content
        publishDate: $publishDate
        viewCount: $viewCount
        likeCount: $likeCount
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      title
      photo
      content
      publishDate
      viewCount
      likeCount
      startDate
      endDate
      user {
        username
        nameSurname
      }
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation UpdateEvent(
    $id: ID!
    $title: String
    $photo: String
    $content: String
    $publishDate: String
    $viewCount: Int
    $likeCount: Int
    $startDate: String
    $endDate: String
  ) {
    updateEvent(
      id: $id
      data: {
        title: $title
        photo: $photo
        content: $content
        publishDate: $publishDate
        viewCount: $viewCount
        likeCount: $likeCount
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      title
      photo
      content
      publishDate
      viewCount
      likeCount
      startDate
      endDate
      user {
        id
        nameSurname
        username
      }
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;
