import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_EVENT } from "../../gql/events/query";
import ErrorContainer from "../ui/ErrorContainer";
import { UPDATE_EVENT } from "../../gql/events/mutation";
import Loading from "../ui/Loading";
import { useParams } from "react-router-dom";
import Form from "./Form";
import { history } from "../../routes/AppRouter";

export default () => {
  const params = useParams();
  const { loading, error, data, networkStatus } = useQuery(GET_EVENT, {
    variables: {
      slug: params.slug,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  const [updateEvent, { loading: mutationLoading }] = useMutation(UPDATE_EVENT);
  const [submitError, setSubmitError] = useState("");

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
      const result = await updateEvent({
        variables: {
          ...formData,
        },
      });

      if (result) {
        history.push("/etkinlikler");
      }
    } catch (err) {
      console.log(err);
      setSubmitError("Hata: " + err.message);
    }
  };

  return (
    <div>
      {submitError && <ErrorContainer title={submitError} />}
      <Form
        handleSubmit={handleSubmit}
        title={"Duyuru Düzenle"}
        data={data.event}
        mutationLoading={mutationLoading}
      />
    </div>
  );
};
