import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_NEWS } from "../../gql/news/query";
import { DELETE_NEW } from "./../../gql/news/mutation";
import { Link } from "react-router-dom";
import Loading from "../ui/Loading";
import Th from "../ui/TableHead";
import Td from "../ui/TableData";
import Delete from "../ui/Delete";
import ErrorContainer from "../ui/ErrorContainer";
import moment from "moment";
import "moment/locale/tr";
import { BsArrowClockwise, BsPlusCircle } from "react-icons/bs";

const All = () => {
  moment.locale("tr");
  const [submitError, setSubmitError] = useState(null);
  const [deleteNew, { loading: deleteLoading }] = useMutation(DELETE_NEW);
  const { loading, error, data, networkStatus, refetch } = useQuery(GET_NEWS, {
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

  const handleDelete = async (id) => {
    try {
      const result = await deleteNew({
        variables: { id: id },
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
          <h2 className="text-4xl">Haber listesi</h2>
          <p>
            Buradan sitedeki tüm haberleri görüntüleyebilir ve
            düzenleyebilirsiniz.
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
            to="/haberler/ekle"
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
            <Th custom="text-left whitespace-no-wrap">Haber Başlığı</Th>
            <Th custom=" whitespace-no-wrap text-left">Yayınlanma Tarihi</Th>
            <Th custom=" whitespace-no-wrap text-left">Oluşturan Kullanıcı</Th>
            <Th custom=" whitespace-no-wrap text-left">Beğenilme Sayısı</Th>
            <Th custom=" whitespace-no-wrap text-left">Görüntülenme Sayısı</Th>
            <Th>İşlemler</Th>
          </tr>
        </thead>
        <tbody>
          {data.news.map((item, index) => (
            <tr key={item.id}>
              <Td custom="text-center w-1/12">{index + 1}</Td>
              <Td custom=" whitespace-no-wrap">{item.title}</Td>
              <Td custom=" whitespace-no-wrap">
                {moment(item.publishDate).format("Do MMMM YYYY, h:mm")}
              </Td>
              <Td custom=" whitespace-no-wrap">
                {item.user && item.user.nameSurname
                  ? item.user.nameSurname
                  : item.user.username}
              </Td>
              <Td custom=" whitespace-no-wrap">{item.likeCount}</Td>
              <Td custom=" whitespace-no-wrap">{item.viewCount}</Td>
              <Td custom="text-center w-2/12">
                <div className="inline-flex">
                  <Link
                    to={`/haberler/duzenle/${item.id}`}
                    className="bg-blue-600 hover:bg-blue-400 text-gray-100 py-1 text-xs px-2 rounded-l"
                  >
                    Düzenle
                  </Link>
                  <Delete
                    handleDelete={handleDelete}
                    dataId={item.id}
                    title={item.username}
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
