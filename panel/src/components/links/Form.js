import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";

export default ({ data, title: pageTitle, handleSubmit, mutationLoading }) => {
  const [error, setError] = useState("");

  const [name, setName] = useState(data ? data.name : "");
  const [url, setUrl] = useState(data ? data.url : "");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    const sendData = {
      name,
      url,
    };

    return handleSubmit(sendData);
  };

  return (
    <form onSubmit={onSubmit} className="w-full bg-white p-5">
      <h1 className="text-2xl font-semibold mb-3 text-center">{pageTitle}</h1>
      {error && error}
      <div className="w-full pb-2">
        <div className="flex flex-wrap">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Bağlantı Adı
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Bağlantı Adı"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Bağlantı Linki
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="url"
            placeholder="Link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
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
