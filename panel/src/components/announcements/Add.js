import React, { useState } from "react";
import Form from "./Form";
import ErrorContainer from "../ui/ErrorContainer";
import { useMutation } from "@apollo/client";
import { CREATE_ANNOUNCEMENT } from "../../gql/announcements/mutation";
import { history } from "../../routes/AppRouter";

const Add = () => {
  const [createAnnouncement, { loading: mutationLoading }] = useMutation(
    CREATE_ANNOUNCEMENT
  );
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (formData) => {
    try {
      const result = await createAnnouncement({
        variables: { ...formData },
      });
      if (result) {
        history.push("/duyurular");
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
        title={"Duyuru Ekle"}
        mutationLoading={mutationLoading}
      />
    </div>
  );
};

export default Add;
