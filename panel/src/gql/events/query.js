import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query Events($orderBy: String) {
    events(orderBy: $orderBy) {
      id
      slug
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
  query Event($slug: String!) {
    event(slug: $slug) {
      id
      slug
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
