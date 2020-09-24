import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USERS } from "../../gql/user/query";
import { DELETE_USER } from "./../../gql/user/mutation";
import { Link } from "react-router-dom";
import Loading from "../ui/Loading";
import Th from "../ui/TableHead";
import Td from "../ui/TableData";
import Delete from "../ui/Delete";
import { BsArrowClockwise, BsPlusCircle } from "react-icons/bs";

const All = () => {
  const [deleteUser, { loading: deleteLoading }] = useMutation(DELETE_USER);
  const { loading, error, data, networkStatus, refetch } = useQuery(GET_USERS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  if (loading || networkStatus === 4) return <Loading />;
  if (error) {
    return (
      <div className="bg-red-100 border border-red-600 text-center p-5">
        <p>Veri yüklenirken bir hata oluştu.</p>
        <p className="text-red-800">{error.message}</p>
      </div>
    );
  }

  const handleDelete = async (userId) => {
    try {
      const result = await deleteUser({
        variables: { id: userId },
      });
      if (result) {
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="flex mb-4">
        <div className="w-1/2">
          <h2 className="text-4xl">Üye listesi</h2>
          <p>
            Aşağıda siteye üye olan bütün kullanıcılar listelenmiştir.
            İsterseniz arama yapabilir veya kullanıcıları düzenleyebilir,
            silebilirsiniz.
          </p>
        </div>
        <div className="flex w-1/2 items-center justify-end">
          <button
            onClick={() => refetch()}
            className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-3"
          >
            <BsArrowClockwise />
          </button>

          <Link
            to="/kullanicilar/ekle"
            className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <BsPlusCircle />
          </Link>
        </div>
      </div>

      <table className="table-auto w-full mb-6">
        <thead>
          <tr>
            <Th>#</Th>
            <Th custom="text-left whitespace-no-wrap">Kullanıcı Adı</Th>
            <Th custom=" whitespace-no-wrap text-left">Rol</Th>
            <Th>İşlemler</Th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user, index) => (
            <tr key={user.id}>
              <Td custom="text-center w-1/12">{index + 1}</Td>
              <Td custom=" whitespace-no-wrap">{user.username}</Td>
              <Td>{user.userType === "ADMIN" ? "Yönetici" : "Moderatör"}</Td>
              <Td custom="text-center w-2/12">
                <div className="inline-flex">
                  <Link
                    to={`/kullanicilar/duzenle/${user.id}`}
                    className="bg-blue-600 hover:bg-blue-400 text-gray-100 py-1 text-xs px-2 rounded-l"
                  >
                    Düzenle
                  </Link>
                  <Delete
                    handleDelete={handleDelete}
                    dataId={user.id}
                    title={user.username}
                    deleteLoading={deleteLoading}
                  />
                </div>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default All;
