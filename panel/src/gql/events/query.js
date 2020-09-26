import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query Events($orderBy: String) {
    events(orderBy: $orderBy) {
      id
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

export const GET_EVENT = gql`
  query Event($id: ID!) {
    event(id: $id) {
      id
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
