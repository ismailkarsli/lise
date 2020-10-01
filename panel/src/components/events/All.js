import React, { useEffect, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_POSTS } from "../../gql/posts/query";
import { DELETE_POST } from "./../../gql/posts/mutation";
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

  const [sortBy, setSortBy] = useState(
    JSON.parse(localStorage.getItem("events_sort")) || ["createdAt", "DESC"]
  );

  const [
    getPosts,
    { data, loading, error, refetch, networkStatus },
  ] = useLazyQuery(GET_POSTS, {
    variables: {
      orderBy: sortBy.join("_"),
      postType: "EVENT",
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });
  const [deletePost, { loading: deleteLoading }] = useMutation(DELETE_POST);

  useEffect(() => {
    getPosts();
    localStorage.setItem("events_sort", JSON.stringify(sortBy));
  }, [sortBy, getPosts]);

  if (loading || networkStatus === 4 || !data) return <Loading />;

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
      const result = await deletePost({
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

  const handleThClick = (id) => {
    if (sortBy[0] === id) {
      if (sortBy[1] === "ASC") {
        setSortBy([id, "DESC"]);
      } else {
        setSortBy([id, "ASC"]);
      }
    } else {
      setSortBy([id, "DESC"]);
    }
  };

  return (
    <div>
      <div className="flex mb-4">
        <div className="w-1/2">
          <h2 className="text-4xl">Etkinlik listesi</h2>
          <p>
            Buradan sitedeki tüm etkinlikleir görüntüleyebilir ve
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
            to="/etkinlikler/ekle"
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
            <Th onClick={() => handleThClick("createdAt")}>#</Th>
            <Th>Etkinlik Başlığı</Th>
            <Th onClick={() => handleThClick("publishDate")}>
              Yayınlanma Tarihi
            </Th>
            <Th>Oluşturan Kişi</Th>
            <Th onClick={() => handleThClick("startDate")}>Başlangıç / Süre</Th>
            <Th onClick={() => handleThClick("likeCount")}>Beğeni</Th>
            <Th onClick={() => handleThClick("viewCount")}>Görüntülenme</Th>
            <Th>İşlemler</Th>
          </tr>
        </thead>

        <tbody>
          {data.posts.map((item, index) => {
            const startDate = moment(item.startDate);
            const endDate = moment(item.endDate);
            let eventDate = "";

            if (startDate._isValid) {
              if (endDate._isValid) {
                const duration = moment.duration(endDate.diff(startDate))._data;
                eventDate = `
                ${startDate.format("Do MMM YYYY, HH:mm / ")}
                ${duration.days ? duration.days + " gn" : ""}
                ${duration.hours ? duration.hours + " sa" : ""}
                ${duration.minutes ? duration.minutes + " dk" : ""}
                `;
              } else {
                eventDate = `
                ${startDate.format("Do MMM YYYY, HH:mm")}`;
              }
            } else if (endDate._isValid) {
              eventDate = "Başlangıç eklenmemiş.";
            } else {
              eventDate = "Belirtilmemiş.";
            }

            return (
              <tr key={item.id}>
                <Td>{index + 1}</Td>
                <Td>{item.title}</Td>
                <Td>
                  {moment(item.publishDate).format("Do MMMM YYYY, hh:mm")}
                </Td>
                <Td>
                  {item.user && item.user.nameSurname
                    ? item.user.nameSurname
                    : item.user.username}
                </Td>
                <Td>{eventDate}</Td>
                <Td>{item.likeCount}</Td>
                <Td>{item.viewCount}</Td>
                <Td custom="text-center w-2/12">
                  <div className="inline-flex">
                    <Link
                      to={`/etkinlikler/duzenle/${item.slug}`}
                      className="bg-green-500 hover:bg-green-400 text-gray-100 py-1 text-xs px-2 rounded-l"
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
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default All;
