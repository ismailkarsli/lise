import { gql } from "@apollo/client";

export const SITE_SETTINGS = gql`
  query GetSiteSettings {
    siteSettings {
      id
      name
      phone
      mail
      address
      mapLongitude
      mapLatitude
      about
      aboutHome
      aboutHomeBg
    }
  }
`;
