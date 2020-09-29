import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "@ckeditor/ckeditor5-build-classic/build/translations/tr.js";
import { useMutation } from "@apollo/client";
import { UPLOAD_PHOTO } from "../../gql/photo/mutation";

class UploadAdapter {
  constructor(loader, uploadPhoto, setIsPhotoUploading) {
    this.loader = loader;
    this.uploadPhoto = uploadPhoto;
    this.setIsPhotoUploading = setIsPhotoUploading;
  }

  upload() {
    return this.loader.file.then(
      (photo) =>
        new Promise(async (resolve, reject) => {
          try {
            const result = await this.uploadPhoto({
              variables: {
                photo,
              },
            });

            resolve({
              default: `${process.env.REACT_APP_GRAPHQL_SERVER}images/0/0/${result.data.uploadPhoto.photo}`,
              1080: `${process.env.REACT_APP_GRAPHQL_SERVER}images/1920/1080/${result.data.uploadPhoto.photo}`,
              720: `${process.env.REACT_APP_GRAPHQL_SERVER}images/1280/720/${result.data.uploadPhoto.photo}`,
              360: `${process.env.REACT_APP_GRAPHQL_SERVER}images/640/360/${result.data.uploadPhoto.photo}`,
            });
          } catch (error) {
            reject(
              "Fotoğraf yüklenirken hata oluştu. Hata mesajı: " + error.message
            );
          } finally {
            this.setIsPhotoUploading(false);
          }
        })
    );
  }
}
const Editor = ({ value, setValue, setIsPhotoUploading }) => {
  const [uploadPhoto] = useMutation(UPLOAD_PHOTO);
  return (
    <div className="CKEditor">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        config={{
          language: "tr",
          height: "500px",
        }}
        onChange={(event, editor) => {
          const editorData = editor.getData();
          setValue(editorData);
        }}
        onInit={(editor) => {
          editor.plugins.get("FileRepository").createUploadAdapter = (
            loader
          ) => {
            setIsPhotoUploading(true);
            return new UploadAdapter(loader, uploadPhoto, setIsPhotoUploading);
          };
        }}
      />
    </div>
  );
};

export default Editor;
