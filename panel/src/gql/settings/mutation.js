import { gql } from "@apollo/client";

export const UPDATE_SETTINGS = gql`
  mutation UpdateSettings(
    $name: String
    $phone: String
    $mail: String
    $address: String
    $facebook: String
    $twitter: String
    $youtube: String
    $instagram: String
    $mapLongitude: Float
    $mapLatitude: Float
    $about: String
    $aboutHome: String
    $aboutHomeBg: String
  ) {
    updateSiteSettings(
      data: {
        name: $name
        phone: $phone
        mail: $mail
        address: $address
        facebook: $facebook
        twitter: $twitter
        youtube: $youtube
        instagram: $instagram
        mapLongitude: $mapLongitude
        mapLatitude: $mapLatitude
        about: $about
        aboutHome: $aboutHome
        aboutHomeBg: $aboutHomeBg
      }
    ) {
      id
      name
      phone
      mail
      address
      facebook
      twitter
      youtube
      instagram
      mapLongitude
      mapLatitude
      about
      aboutHome
      aboutHomeBg
    }
  }
`;
