import React, { useState } from "react";
import Form from "./Form";
import ErrorContainer from "../ui/ErrorContainer";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../gql/user/mutation";
import { history } from "../../routes/AppRouter";

const Add = () => {
  const [createUser, { loading: mutationLoading }] = useMutation(CREATE_USER);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (formData) => {
    try {
      const result = await createUser({
        variables: { ...formData },
      });
      if (result) {
        history.push("/kullanicilar");
      }
    } catch (err) {
      console.log(err);
      setSubmitError(err.message);
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
