import { gql } from '@apollo/client';

export const UPLOAD_PHOTO = gql`
  mutation UploadPhoto($photo: Upload!) {
    uploadPhoto(photo: $photo) {
      photo
    }
  }
`;
