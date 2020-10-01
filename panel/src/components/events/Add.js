import React, { useState } from "react";
import Form from "./Form";
import ErrorContainer from "../ui/ErrorContainer";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../gql/posts/mutation";
import { history } from "../../routes/AppRouter";

const Add = () => {
  const [createPost, { loading: mutationLoading }] = useMutation(CREATE_POST);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (formData) => {
    try {
      const result = await createPost({
        variables: { postType: "EVENT", ...formData },
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
        title={"Etkinlik Ekle"}
        mutationLoading={mutationLoading}
      />
    </div>
  );
};

export default Add;
