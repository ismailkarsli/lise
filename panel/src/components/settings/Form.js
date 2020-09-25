import React, { useState } from "react";
import ErrorContainer from "./../ui/ErrorContainer";
import { ScaleLoader } from "react-spinners";

export default ({ data, title: pageTitle, handleSubmit, mutationLoading }) => {
  const [error, setError] = useState("");

  const [name, setName] = useState(data ? data.name : "");
  const [phone, setPhone] = useState(data ? data.phone : "");
  const [mail, setMail] = useState(data ? data.mail : "");
  const [address, setAddress] = useState(data ? data.address : "");
  const [mapLongitude, setMapLongitude] = useState(
    data ? data.mapLongitude : ""
  );
  const [mapLatitude, setMapLatitude] = useState(data ? data.mapLatitude : "");
  const [about, setAbout] = useState(data ? data.about : "");
  const [aboutShort, setAboutShort] = useState(data ? data.aboutShort : "");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    const sendData = {
      name,
    };

    return handleSubmit(sendData);
  };

  return (
    <form onSubmit={onSubmit} className="w-full bg-white p-5">
      <h1 className="text-2xl font-semibold mb-3 text-center">{pageTitle}</h1>
      {error && <ErrorContainer title={error} />}

      <div className="flex flex-wrap">
        <div className="w-full p-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Okul Adı
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Okul Adı"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-full p-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Telefon Numarası
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Telefon Numarası"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="w-full p-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            E-Posta Adresi
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="E-Posta Adresi"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>
        <div className="w-full p-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Telefon Numarası
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="textarea"
            placeholder="Telefon Numarası"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
