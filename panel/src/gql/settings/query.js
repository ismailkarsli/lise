import { gql } from "@apollo/client";

export const GET_SETTINGS = gql`
  query Settings {
    siteSettings {
      name
      phone
      mail
      address
      mapLongitude
      mapLatitude
      about
      aboutHome
      aboutHomeBg
      facebook
      twitter
      youtube
      instagram
    }
  }
`;
