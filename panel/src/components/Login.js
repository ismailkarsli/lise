import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../gql/auth/mutation";
import { ScaleLoader } from "react-spinners";
import { history } from "../routes/AppRouter";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loginUser, { loading }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ variables: { username, password } });
      const token = res.data.loginUser.token;
      localStorage.setItem("token", token);
      history.push("/anasayfa");
    } catch (err) {
      setUsername("");
      setPassword("");
      if (err.graphQLErrors) {
        setError(err.graphQLErrors[0].message);
      } else {
        setError("Bilinmeyen hata");
      }
    }
  };

  const token = localStorage.getItem("token");
  if (token) return <Redirect to="/anasayfa" />;

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="p-8 rounded-lg">
        <div className="flex justify-center mb-3">
          <h1 className="text-2xl font-bold">Giriş</h1>
        </div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center mb-2">
            <p className="text-4xl">logo gelecek</p>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center my-2">{error}</p>
          )}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2 "
            >
              Kullanıcı Adı
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2 "
            >
              Şifre
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loading ? <ScaleLoader height={15} color="#f6fa28" /> : "Giriş"}
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy; 2020</p>
      </div>
    </div>
  );
};

export default Login;
