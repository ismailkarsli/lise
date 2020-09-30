import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query GetEvents($orderBy: String) {
    events(orderBy: $orderBy) {
      id
      title
      slug
      photo
      content
      publishDate
      startDate
      endDate
      viewCount
      likeCount
      createdAt
    }
  }
`;
