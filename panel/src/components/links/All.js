import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_LINKS } from "../../gql/links/query";
import { DELETE_LINK } from "./../../gql/links/mutation";
import { Link } from "react-router-dom";
import Loading from "../ui/Loading";
import Th from "../ui/TableHead";
import Td from "../ui/TableData";
import Delete from "../ui/Delete";
import ErrorContainer from "../ui/ErrorContainer";
import { BsArrowClockwise, BsPlusCircle } from "react-icons/bs";

const All = () => {
  const [submitError, setSubmitError] = useState(null);
  const [deleteLink, { loading: deleteLoading }] = useMutation(DELETE_LINK);
  const { loading, error, data, networkStatus, refetch } = useQuery(GET_LINKS, {
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
      const result = await deleteLink({
        variables: { id: userId },
      });
      if (result) {
        refetch();
      }
    } catch (err) {
      setSubmitError(err.message);
      console.log(err);
    }
  };
  return (
    <div>
      <div className="flex mb-4">
        <div className="w-1/2">
          <h2 className="text-4xl">Bağlantı listesi</h2>
          <p>
            Aşağıdan sitedeki bağlantıları düzenleyebilir ve silebilirsiniz.
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
            to="/baglantilar/ekle"
            className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <BsPlusCircle />
          </Link>
        </div>
      </div>
      {submitError && <ErrorContainer title={submitError} />}
      <table className="table-auto w-full mb-6">
        <thead>
          <tr>
            <Th>#</Th>
            <Th>Bağlantı Adı</Th>
            <Th>Bağlantı Linki</Th>
            <Th>İşlemler</Th>
          </tr>
        </thead>
        <tbody>
          {data.links.map((link, index) => (
            <tr key={link.id}>
              <Td>{index + 1}</Td>
              <Td>{link.name}</Td>
              <Td>{link.url}</Td>
              <Td>
                <div className="inline-flex">
                  <Link
                    to={`/baglantilar/duzenle/${link.id}`}
                    className="bg-green-500 hover:bg-green-400 text-gray-100 py-1 text-xs px-2 rounded-l"
                  >
                    Düzenle
                  </Link>
                  <Delete
                    handleDelete={handleDelete}
                    dataId={link.id}
                    title={link.name}
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
