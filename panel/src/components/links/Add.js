import React, { useState } from "react";
import Form from "./Form";
import ErrorContainer from "../ui/ErrorContainer";
import { useMutation } from "@apollo/client";
import { CREATE_LINK } from "../../gql/links/mutation";
import { history } from "../../routes/AppRouter";

const Add = () => {
  const [createLink, { loading: mutationLoading }] = useMutation(CREATE_LINK);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (formData) => {
    try {
      const result = await createLink({
        variables: { ...formData },
      });
      if (result) {
        history.push("/baglantilar");
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
        title={"Bağlantı Ekle"}
        mutationLoading={mutationLoading}
      />
    </div>
  );
};

export default Add;
