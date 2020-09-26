import React, { useState } from "react";
import ErrorContainer from "./../ui/ErrorContainer";
import GoogleMap from "./../ui/GoogleMaps";
import { ScaleLoader } from "react-spinners";
import Editor from "./../ui/Editor";

export default ({ data, title: pageTitle, handleSubmit, mutationLoading }) => {
  const [error, setError] = useState("");
  const [isPhotoUploading, setIsPhotoUploading] = useState(false);

  const [name, setName] = useState(data ? data.name : "");
  const [phone, setPhone] = useState(data ? data.phone : "");
  const [mail, setMail] = useState(data ? data.mail : "");
  const [address, setAddress] = useState(data ? data.address : "");
  const [mapLongitude, setMapLongitude] = useState(
    data ? data.mapLongitude : ""
  );
  const [mapLatitude, setMapLatitude] = useState(data ? data.mapLatitude : "");
  const [about, setAbout] = useState(data ? data.about : "");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    const sendData = {
      name,
      phone,
      mail,
      address,
      mapLongitude: mapLongitude ? parseFloat(mapLongitude) : undefined,
      mapLatitude: mapLatitude ? parseFloat(mapLatitude) : undefined,
      about,
    };

    return handleSubmit(sendData);
  };

  return (
    <form onSubmit={onSubmit} className="w-full bg-white p-5">
      <h1 className="text-2xl font-semibold mb-3 text-center">{pageTitle}</h1>
      {error && <ErrorContainer title={error} />}

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-2">
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

        <div className="w-full p-2 md:w-1/2">
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
        <div className="w-full p-2 md:w-1/2">
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
        <div className="w-full p-2 md:w-1/2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Adres
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Adres"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2  p-2 mb-8">
            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Hakkında
            </label>
            <Editor
              value={about}
              setValue={setAbout}
              isPhotoUploading={isPhotoUploading}
              setIsPhotoUploading={setIsPhotoUploading}
            />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Harita
            </label>
            <GoogleMap
              addMarker={true}
              latitude={mapLatitude}
              setLatitude={setMapLatitude}
              draggable={true}
              longitude={mapLongitude}
              setLongitude={setMapLongitude}
              /*
              Google map api key kullanılmalı
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
              */
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ minHeight: `338px` }} />}
              mapElement={
                <div
                  className="block w-full h-full"
                  style={{ minWidth: "100%", height: "338px" }}
                />
              }
            />
          </div>
        </div>
        {isPhotoUploading ? (
          <div className="w-full bg-gray-200 pt-2 pb-1 mx-2 px-8 my-4 flex items-center">
            <ScaleLoader height="20px" />
            <span className="ml-4 mb-2">Fotoğraf yükleniyor...</span>
          </div>
        ) : (
          ""
        )}
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
      </div>
    </form>
  );
};
