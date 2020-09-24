import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ErrorContainer from "./../ui/ErrorContainer";
import PhotoUpload from "../PhotoUpload";
import { ScaleLoader } from "react-spinners";
import moment from "moment";

export default ({ data, title: pageTitle, handleSubmit, mutationLoading }) => {
  const [error, setError] = useState("");

  const [name, setName] = useState(data ? data.name : "");
  const [username, setUsername] = useState(data ? data.username : "");
  const [email, setEmail] = useState(data ? data.email : "");
  const [birthDay, setBirthDay] = useState(
    data ? moment(data.birthDay).format("YYYY-MM-DDTHH:mm") : ""
  );
  const [userType, setUserType] = useState(data ? data.userType : "USER");
  const [userStatus, setUserStatus] = useState(
    data ? data.userStatus : "ACTIVE"
  );
  const [points, setPoints] = useState(data ? data.points : "");
  const [gender, setGender] = useState(data ? data.gender : "MAN");

  const [password, setPassword] = useState("");
  const [photosArray, setPhotosArray] = useState([]);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username) {
      return setError(
        <ErrorContainer title="Kullanıcı adı girilmesi gereklidir." />
      );
    }

    if ((password || !data) && password.length < 6) {
      return setError(
        <ErrorContainer title="Minimum 6 haneli şifre girilmesi gereklidir" />
      );
    }

    if (!birthDay) {
      return setError(
        <ErrorContainer title="Doğum tarihi girilmesi gereklidir." />
      );
    }

    if (!userStatus) {
      return setError(
        <ErrorContainer title="Kullanıcı durumu girilmesi gereklidir." />
      );
    }

    if (!name) {
      return setError(<ErrorContainer title="İsim girilmesi gereklidir." />);
    }

    if (!email) {
      return setError(
        <ErrorContainer title="E-posta adresi girilmesi gereklidir" />
      );
    }

    if (!userType) {
      return setError(
        <ErrorContainer title="Kullanıcı rolü seçilmesi gereklidir" />
      );
    }

    if (!gender) {
      return setError(
        <ErrorContainer title="Kullanıcı cinsiyeti seçilmesi gereklidir" />
      );
    }

    const sendData = {
      username,
      name,
      email,
      password: password.length === 0 ? null : password,
      userType,
      userStatus,
      birthDay: new Date(moment(birthDay).format()),
      points,
      gender,
      profilePhoto: photosArray.length > 0 ? photosArray[0] : null,
    };

    return handleSubmit(sendData);
  };

  return (
    <form onSubmit={onSubmit} className="w-full bg-white p-5">
      <h1 className="text-2xl font-semibold mb-3 text-center">{pageTitle}</h1>
      {error && error}

      <div className="block mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          Profil Resmi
        </label>
        <PhotoUpload
          isSingle={true}
          images={data && data.profilePhoto}
          setImageArray={setPhotosArray}
        />
      </div>

      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Kullanıcı Adı
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Kullanıcı adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            İSİM
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="İsim Soyisim"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            E-posta
          </label>
          <input
            className="appearance-none w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Puan
          </label>
          <input
            className="appearance-none  w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Kullanıcı puanları"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <label
            className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Kullanıcı Rolü
          </label>
          <div className="relative">
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user-role"
            >
              <option value="USER">Kullanıcı</option>
              <option value="MODERATOR">Moderatör</option>
              <option value="ADMIN">Yönetici</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <label
            className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Kullanıcı Durumu
          </label>
          <div className="relative">
            <select
              value={userStatus}
              onChange={(e) => setUserStatus(e.target.value)}
              className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user-type"
            >
              <option value="ACTIVE">Aktif</option>
              <option value="PASSIVE">Pasif</option>
              <option value="BANNED">Yasaklı</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <label
            className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Cinsiyet
          </label>
          <div className="relative">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="user-gender"
            >
              <option value="MAN">Erkek</option>
              <option value="WOMAN">Kadın</option>
              <option value="OTHER">Diğer</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Doğum Tarihi
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="datetime-local"
            value={birthDay}
            onChange={(e) =>
              setBirthDay(moment(e.target.value).format("YYYY-MM-DDTHH:mm"))
            }
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <label className=" uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Şifre
          </label>
          <div className="relative w-full">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type={passwordVisible ? "text" : "password"}
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute"
              style={{ top: "10px", right: "5px" }}
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible className="text-2xl" />
              ) : (
                <AiOutlineEye className="text-2xl" />
              )}
            </div>
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
