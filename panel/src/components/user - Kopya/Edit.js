import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../../gql/user/query";
import { UPDATE_USER } from "../../gql/user/mutation";
import Loading from "../ui/Loading";

import Form from "./Form";
import { history } from "../../routes/AppRouter";

export default ({ dataId }) => {
  const { loading, error, data, networkStatus } = useQuery(GET_USER, {
    variables: {
      id: dataId,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });
  const [updateUser, { loading: mutationLoading }] = useMutation(UPDATE_USER);

  if (loading || networkStatus === 4) {
    return <Loading />;
  }
  if (error) {
    return (
      <div className="bg-red-100 border border-red-600 text-center p-5">
        <p>Veri yüklenirken bir hata oluştu.</p>
        <p className="text-red-800">{error.message}</p>
      </div>
    );
  }

  const handleSubmit = async (formData) => {
    try {
      const result = await updateUser({
        variables: {
          id: dataId,
          ...formData,
          points: parseInt(formData.points),
        },
      });

      if (result) {
        history.push("/kullanicilar");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        title={"Üye Düzenle"}
        data={data.user}
        mutationLoading={mutationLoading}
      />
    </div>
  );
};
