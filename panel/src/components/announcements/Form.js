import React, { useState } from "react";
import ErrorContainer from "./../ui/ErrorContainer";
import { ScaleLoader } from "react-spinners";
import PhotoUpload from "../PhotoUpload";
import moment from "moment";
import Editor from "../ui/Editor";

export default ({ data, title: pageTitle, handleSubmit, mutationLoading }) => {
  const [error, setError] = useState("");
  const [isPhotoUploading, setIsPhotoUploading] = useState(false);

  const [title, setTitle] = useState(data ? data.title : "");
  const [inSlide, setInSlide] = useState(data && data.inSlide);
  const [photosArray, setPhotosArray] = useState([]);
  const [content, setContent] = useState(
    data
      ? data.content.replaceAll(
          "---SERVER-HOST---",
          process.env.REACT_APP_GRAPHQL_SERVER
        )
      : ""
  );
  const [publishDate, setPublishDate] = useState(
    data ? moment(data.publishDate).format("YYYY-MM-DDTHH:mm") : ""
  );
  // const [viewCount, setViewCount] = useState(data ? data.viewCount : "");
  // const [likeCount, setLikeCount] = useState(data ? data.likeCount : "");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title) {
      return setError(<ErrorContainer title="Başlık girilmesi gereklidir." />);
    }
    const sendData = {
      id: data && data.id ? data.id : undefined,
      title,
      photo: photosArray.toString(),
      content: content.replaceAll(
        process.env.REACT_APP_GRAPHQL_SERVER,
        "---SERVER-HOST---"
      ),
      publishDate: publishDate
        ? new Date(moment(publishDate).format())
        : undefined,
      inSlide,
      // viewCount: viewCount ? parseInt(viewCount) : undefined,
      // likeCount: likeCount ? parseInt(likeCount) : undefined,
    };
    console.log("sendData:", sendData);

    return handleSubmit(sendData);
  };

  return (
    <form onSubmit={onSubmit} className="w-full bg-white p-5">
      <h1 className="text-2xl font-semibold mb-3 text-center">{pageTitle}</h1>
      {error && error}

      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Başlık
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Başlık"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-3/4  mb-8 px-4">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            İçerik
          </label>
          <Editor
            value={content}
            setValue={setContent}
            isPhotoUploading={isPhotoUploading}
            setIsPhotoUploading={setIsPhotoUploading}
          />
        </div>

        <div className="w-full sm:w-1/4">
          <div className="w-full px-4">
            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Yayınlanma Tarihi
            </label>
            <input
              className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="datetime-local"
              placeholder="Yayınlanma Tarihi"
              value={publishDate}
              onChange={(e) =>
                setPublishDate(
                  moment(e.target.value).format("YYYY-MM-DDTHH:mm")
                )
              }
            />
          </div>

          {/* <div>
            <label className="uppercase px-4 block tracking-wide text-gray-700 text-xs font-bold mb-2">
              Görüntülenme / Beğenilme
            </label>
            <div className="w-1/2 pl-4 pr-2 md:pl-4 md:pr-1 inline-block">
              <input
                className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="number"
                placeholder="Görüntülenme Sayısı"
                value={viewCount}
                onChange={(e) => setViewCount(e.target.value)}
              />
            </div>

            <div className="w-1/2 pr-4 pl-2 md:pr-4 md:pl-1 inline-block">
              <input
                className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="number"
                placeholder="Beğenilme Sayısı"
                value={likeCount}
                onChange={(e) => setLikeCount(e.target.value)}
              />
            </div>
          </div> */}
          <div className="w-full mb-3 px-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Öne Çıkan Fotoğraf
            </label>
            <PhotoUpload
              isSingle={true}
              images={data && data.photo}
              setImageArray={setPhotosArray}
              setIsPhotoUploading={setIsPhotoUploading}
              previewHeight={600}
              previewWidth={600}
            />
          </div>

          <div className="w-full px-4">
            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Slayt
            </label>
            <div className="flex items-center">
              <span className="pr-1">Slaytta gösterilsin mi?</span>
              <input
                type="checkbox"
                checked={inSlide}
                onChange={(e) => setInSlide(!inSlide)}
              />
            </div>
          </div>
        </div>
      </div>
      {isPhotoUploading ? (
        <div className="bg-gray-200 pt-2 pb-1 mx-4 px-8 my-4 flex items-center">
          <ScaleLoader height="20px" />
          <span className="ml-4 mb-2">Fotoğraf yükleniyor...</span>
        </div>
      ) : (
        ""
      )}
      <div className="flex">
        <button
          className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded"
          type="submit"
        >
          {mutationLoading ? (
            <ScaleLoader height={15} color="#f6fa28" />
          ) : (
            "Kaydet"
          )}
        </button>
      </div>
    </form>
  );
};
