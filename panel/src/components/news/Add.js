import React, { useState } from "react";
import Form from "./Form";
import ErrorContainer from "../ui/ErrorContainer";
import { useMutation } from "@apollo/client";
import { CREATE_NEW } from "../../gql/news/mutation";
import { history } from "../../routes/AppRouter";

const Add = () => {
  const [createNew, { loading: mutationLoading }] = useMutation(CREATE_NEW);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (formData) => {
    try {
      const result = await createNew({
        variables: { ...formData },
      });
      if (result) {
        history.push("/haberler");
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
        title={"Kullanıcı Ekle"}
        mutationLoading={mutationLoading}
      />
    </div>
  );
};

export default Add;
