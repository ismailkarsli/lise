import { gql } from "@apollo/client";

export const GET_ANNOUNCEMENTS = gql`
  query Announcements($orderBy: String) {
    announcements(orderBy: $orderBy) {
      id
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

export const GET_ANNOUNCEMENT = gql`
  query Announcement($id: ID!) {
    announcement(id: $id) {
      id
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
