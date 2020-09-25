import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_SETTINGS } from "../../gql/settings/query";
import ErrorContainer from "../ui/ErrorContainer";
import { UPDATE_SETTINGS } from "../../gql/settings/mutation";
import Loading from "../ui/Loading";

import Form from "./Form";
import { history } from "../../routes/AppRouter";

export default ({ dataId }) => {
  const { loading, error, data, networkStatus } = useQuery(GET_SETTINGS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });
  const [updateSettings, { loading: mutationLoading }] = useMutation(
    UPDATE_SETTINGS
  );
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
      const result = await updateSettings({
        variables: {
          ...formData,
        },
      });

      if (result) {
        history.push("/ayarlar");
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
        title={"Ayarları düzenle"}
        data={data.siteSettings}
        mutationLoading={mutationLoading}
      />
    </div>
  );
};
