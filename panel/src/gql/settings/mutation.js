import { gql } from "@apollo/client";

export const UPDATE_SETTINGS = gql`
  mutation UpdateSettings(
    $name: String
    $phone: String
    $mail: String
    $address: String
    $mapLongitude: Float
    $mapLatitude: Float
    $about: String
    $aboutShort: String
    $classCount: Int
    $studentCount: Int
    $teacherCount: Int
  ) {
    updateSiteSettings(
      data: {
        name: $name
        phone: $phone
        mail: $mail
        address: $address
        mapLongitude: $mapLongitude
        mapLatitude: $mapLatitude
        about: $about
        aboutShort: $aboutShort
        classCount: $classCount
        studentCount: $studentCount
        teacherCount: $teacherCount
      }
    ) {
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
