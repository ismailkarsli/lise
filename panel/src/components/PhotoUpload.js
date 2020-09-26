import React, { useCallback, useState, useEffect } from "react";

import { useMutation } from "@apollo/client";
import { useDropzone } from "react-dropzone";
import { UPLOAD_PHOTO } from "../gql/photo/mutation";

export default ({
  images,
  setImageArray,
  setIsPhotoUploading,
  isSingle,
  previewWidth = 100,
  previewHeight = 100,
}) => {
  const [uploadPhoto] = useMutation(UPLOAD_PHOTO);
  let [addedPhotos, setAddedPhotos] = useState(
    images ? (isSingle ? [images] : images) : []
  );
  const [change, setChange] = useState(1);

  useEffect(() => {
    setImageArray(addedPhotos);
  }, [addedPhotos, setAddedPhotos, setImageArray]);

  const renderPhotos = (addedPhotos) => {
    if (addedPhotos.length === 0) {
      return <div></div>;
    }

    return addedPhotos.map((photo, i) => {
      return (
        <div key={i} className=" inline-block border b-gray-300 relative">
          <div
            onClick={() => deletePhoto(photo)}
            className="absolute t-0 r-0 py-1 px-2 text-sm text-white bg-red-600"
          >
            X
          </div>
          <img
            alt="Görsel"
            src={`${process.env.REACT_APP_GRAPHQL_SERVER}images/${previewWidth}/${previewHeight}/${photo}`}
          />
        </div>
      );
    });
  };

  const deletePhoto = (fileName) => {
    const photos = addedPhotos.filter((photo) => photo !== fileName);
    setAddedPhotos(photos);
  };
  const onDrop = useCallback(
    async (acceptedFiles) => {
      setIsPhotoUploading(true);
      acceptedFiles.map(async (a) => {
        try {
          const result = await uploadPhoto({
            variables: {
              photo: a,
            },
          });

          addedPhotos.push(result.data.uploadPhoto.photo);
          setAddedPhotos(addedPhotos);
          setChange(change + Math.random());
        } catch (error) {
          console.log(error);
        } finally {
          setIsPhotoUploading(false);
        }
      });
    },
    [addedPhotos, change, uploadPhoto, setIsPhotoUploading]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      {renderPhotos(addedPhotos)}
      {isSingle && addedPhotos.length > 0 ? (
        ""
      ) : (
        <div {...getRootProps()}>
          <input {...getInputProps({ multiple: !isSingle })} />
          {isDragActive ? (
            <div>
              <div className="block bg-yellow-200 border text-center p-0 lg:p-12 font-display">
                Fotoğrafı buraya bırakın.
              </div>
            </div>
          ) : (
            <div className="block  text-center p-3 border bg-gray-200 font-display">
              Bir fotoğraf seçin.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
