import React, { useState } from "react";
import ErrorContainer from "./../ui/ErrorContainer";
import { ScaleLoader } from "react-spinners";
import PhotoUpload from "../PhotoUpload";
import moment from "moment";

export default ({ data, title: pageTitle, handleSubmit, mutationLoading }) => {
  const [error, setError] = useState("");

  const [title, setTitle] = useState(data ? data.title : "");
  const [photosArray, setPhotosArray] = useState([]);
  const [content, setContent] = useState(data ? data.content : "");
  const [publishDate, setPublishDate] = useState(
    data ? moment(data.publishDate).format("YYYY-MM-DDTHH:mm") : ""
  );
  const [viewCount, setViewCount] = useState(data ? data.viewCount : "");
  const [likeCount, setLikeCount] = useState(data ? data.likeCount : "");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!title) {
      return setError(<ErrorContainer title="Başlık girilmesi gereklidir." />);
    }

    const sendData = {
      title,
      photo: photosArray.toString(),
      content,
      publishDate: publishDate && new Date(moment(publishDate).format()),
      viewCount: viewCount ? parseInt(viewCount) : undefined,
      likeCount: likeCount ? parseInt(likeCount) : undefined,
    };

    return handleSubmit(sendData);
  };

  return (
    <form onSubmit={onSubmit} className="w-full bg-white p-5">
      <h1 className="text-2xl font-semibold mb-3 text-center">{pageTitle}</h1>
      {error && error}

      <div className="flex flex-wrap">
        <div className="w-full">
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

        <div className="w-full">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Yayınlanma Tarihi
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="datetime-local"
            placeholder="Yayınlanma Tarihi"
            value={publishDate}
            onChange={(e) =>
              setPublishDate(moment(e.target.value).format("YYYY-MM-DDTHH:mm"))
            }
          />
        </div>

        <div className="w-full sm:w-3/4  mb-8" style={{ height: "21rem" }}>
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            İçerik
          </label>
          <textarea
            className="appearance-none w-full h-full bg-gray-200 text-gray-700 border rounded  p-3 leading-tight focus:outline-none focus:bg-white resize-y"
            type="textarea"
            rows={8}
            placeholder="İçerik"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-1/4">
          <div className="w-full px-4">
            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Görüntülenme Sayısı
            </label>
            <input
              className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              placeholder="Görüntülenme Sayısı"
              value={viewCount}
              onChange={(e) => setViewCount(e.target.value)}
            />
          </div>

          <div className="w-full px-4">
            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Beğenilme Sayısı
            </label>
            <input
              className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              placeholder="Beğenilme Sayısı"
              value={likeCount}
              onChange={(e) => setLikeCount(e.target.value)}
            />
          </div>
          <div className="block mb-3 px-4">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Soru Fotoğrafı
            </label>
            <PhotoUpload
              isSingle={true}
              images={data && data.photo}
              setImageArray={setPhotosArray}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
