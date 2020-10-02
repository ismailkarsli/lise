import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { GET_SETTINGS } from "../../gql/settings/query";
import { UPDATE_SETTINGS } from "../../gql/settings/mutation";
import Modal from "react-modal";
import ErrorContainer from "../ui/ErrorContainer";
import Loading from "../ui/Loading";
import { TiTick } from "react-icons/ti";

import Form from "./Form";
import SocialMedia from "./SocialMedia";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default () => {
  const match = useRouteMatch();
  const { loading, error, data, networkStatus } = useQuery(GET_SETTINGS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });
  const [updateSettings, { loading: mutationLoading }] = useMutation(
    UPDATE_SETTINGS
  );
  const [submitError, setSubmitError] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

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
      await updateSettings({
        variables: {
          ...formData,
        },
      });
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      setSubmitError("Hata: " + err.message);
    }
  };

  return (
    <React.Fragment>
      {submitError && <ErrorContainer title={submitError} />}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setModalOpen(false);
        }}
        style={modalStyles}
      >
        <div className="flex flex-col relative px-4">
          <div className="modal-content flex items-center">
            <TiTick size={32} />
            Ayarlar kaydedildi.
          </div>
        </div>
      </Modal>
      <Switch>
        <Route path={`${match.path}/sosyal-medya`}>
          <div>
            <SocialMedia
              handleSubmit={handleSubmit}
              title={"Sosyal Medya Bağlantıları"}
              data={data.siteSettings}
              mutationLoading={mutationLoading}
            />
          </div>
        </Route>
        <Route>
          <div>
            <Form
              handleSubmit={handleSubmit}
              title={"Ayarları düzenle"}
              data={data.siteSettings}
              mutationLoading={mutationLoading}
            />
          </div>
        </Route>
      </Switch>
    </React.Fragment>
  );
};
