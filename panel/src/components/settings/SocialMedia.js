import React, { useState } from "react";
import ErrorContainer from "./../ui/ErrorContainer";
import { ScaleLoader } from "react-spinners";

export default ({ data, title: pageTitle, handleSubmit, mutationLoading }) => {
  const [error, setError] = useState("");
  const [facebook, setFacebook] = useState(
    data && data.facebook ? data.facebook : ""
  );
  const [twitter, setTwitter] = useState(
    data && data.twitter ? data.twitter : ""
  );
  const [youtube, setYoutube] = useState(
    data && data.youtube ? data.youtube : ""
  );
  const [instagram, setInstagram] = useState(
    data && data.instagram ? data.instagram : ""
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    const sendData = {
      facebook,
      twitter,
      youtube,
      instagram,
    };

    return handleSubmit(sendData);
  };

  return (
    <form onSubmit={onSubmit} className="w-full bg-white p-5">
      <h1 className="text-2xl font-semibold mb-3 text-center">{pageTitle}</h1>
      {error && <ErrorContainer title={error} />}

      <div className="flex flex-wrap">
        <div className="w-full p-2 md:w-1/2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Facebook Adresi
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="https://facebook.com/okul-sayfasi"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>

        <div className="w-full p-2 md:w-1/2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Twitter Adresi
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="https://twitter.com/okul-hesabi"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>

        <div className="w-full p-2 md:w-1/2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            YouTube Adresi
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="https://www.youtube.com/channel/okul-kanali"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
          />
        </div>

        <div className="w-full p-2 md:w-1/2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Instagram Adresi
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="https://instagram.com/okul-hesabi"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
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
