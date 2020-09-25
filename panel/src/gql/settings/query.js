import { gql } from "@apollo/client";

export const GET_SETTINGS = gql`
  query Settings {
    siteSettings {
      id
      name
      phone
      mail
      address
      mapLongitude
      mapLatitude
      about
      aboutShort
      classCount
      studentCount
      teacherCount
    }
  }
`;
